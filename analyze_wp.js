const fs = require('fs');
const cheerio = require('cheerio');

console.log('=== ANALYZING PLUGINS ===');
if (fs.existsSync('plugins_raw.html')) {
  const html = fs.readFileSync('plugins_raw.html', 'utf8');
  const $ = cheerio.load(html);

  const activePlugins = [];
  const inactivePlugins = [];

  $('table.wp-list-table.plugins tbody tr').each((i, el) => {
    const $row = $(el);
    const isUpdate = $row.hasClass('plugin-update-tr');
    if (isUpdate) return;

    const isActive = $row.hasClass('active');
    const name = $row.find('.plugin-title strong').text().trim();
    const version = $row.find('.plugin-version-author-uri').text().replace(/\s+/g, ' ').trim();
    const desc = $row.find('.desc p').text().trim();

    if (name) {
      const item = { name, version, desc, active: isActive };
      if (isActive) activePlugins.push(item);
      else inactivePlugins.push(item);
    }
  });

  console.log(`\nActive Plugins (${activePlugins.length}):`);
  activePlugins.forEach(p => console.log(`- ${p.name} | ${p.version}`));

  console.log(`\nInactive Plugins (${inactivePlugins.length}):`);
  inactivePlugins.forEach(p => console.log(`- ${p.name} | ${p.version}`));

  fs.writeFileSync('plugins_summary.json', JSON.stringify({ active: activePlugins, inactive: inactivePlugins }, null, 2));
}

console.log('\n=== ANALYZING XML EXPORT ===');
// Quick regex scan of post_types and counts
const xml = fs.readFileSync('skaryabhavan.WordPress.export.xml', 'utf8');

const postTypes = {};
const postTypeMatches = xml.match(/<wp:post_type><!\[CDATA\[(.*?)\]\]><\/wp:post_type>/g) || [];
postTypeMatches.forEach(m => {
  const type = m.replace('<wp:post_type><![CDATA[', '').replace(']]></wp:post_type>', '');
  postTypes[type] = (postTypes[type] || 0) + 1;
});
console.log('Post Types Count:', postTypes);

// Check attachment image URLs count
const attachmentUrls = [];
const attachRegex = /<wp:attachment_url><!\[CDATA\[(.*?)\]\]><\/wp:attachment_url>/g;
let match;
while ((match = attachRegex.exec(xml)) !== null) {
  attachmentUrls.push(match[1]);
}
console.log(`Total Media Attachments found in XML: ${attachmentUrls.length}`);
fs.writeFileSync('all_media_urls.json', JSON.stringify(attachmentUrls, null, 2));

// Quick check site title and URL
const siteTitleMatch = xml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
const siteUrlMatch = xml.match(/<wp:base_site_url>(.*?)<\/wp:base_site_url>/);
console.log('Site Title:', siteTitleMatch ? siteTitleMatch[1] : 'N/A');
console.log('Site Base URL:', siteUrlMatch ? siteUrlMatch[1] : 'N/A');
