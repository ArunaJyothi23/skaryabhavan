const fs = require('fs');
const xml2js = require('xml2js');

const xmlFilePath = './skaryabhavan.WordPress.export.xml';

console.log('Reading and parsing XML export...');
const parser = new xml2js.Parser({ explicitArray: true, mergeAttrs: true });

fs.readFile(xmlFilePath, function (err, data) {
  if (err) throw err;
  console.log('File read successfully. Parsing XML tree...');
  parser.parseString(data, function (err, result) {
    if (err) throw err;
    console.log('XML parsed. Processing items...');

    const channel = result.rss.channel[0];
    const items = channel.item || [];

    const pages = [];
    const posts = [];
    const attachments = [];
    const elementorLibrary = [];
    const navMenuItems = [];
    const contactForms = [];

    items.forEach(item => {
      const postType = item['wp:post_type'] ? item['wp:post_type'][0] : '';
      const status = item['wp:status'] ? item['wp:status'][0] : '';
      const title = item.title ? item.title[0] : '';
      const link = item.link ? item.link[0] : '';
      const slug = item['wp:post_name'] ? item['wp:post_name'][0] : '';
      const content = item['content:encoded'] ? item['content:encoded'][0] : '';
      const excerpt = item['excerpt:encoded'] ? item['excerpt:encoded'][0] : '';
      const publishedAt = item['wp:post_date'] ? item['wp:post_date'][0] : '';
      const author = item['dc:creator'] ? item['dc:creator'][0] : '';
      const postId = item['wp:post_id'] ? item['wp:post_id'][0] : '';

      // Meta map
      const postmeta = item['wp:postmeta'] || [];
      const meta = {};
      postmeta.forEach(m => {
        const key = m['wp:meta_key'] ? m['wp:meta_key'][0] : '';
        const value = m['wp:meta_value'] ? m['wp:meta_value'][0] : '';
        if (key) meta[key] = value;
      });

      // Parse Elementor data if present
      let elementorData = null;
      if (meta['_elementor_data']) {
        try {
          elementorData = JSON.parse(meta['_elementor_data']);
        } catch (e) {
          // Sometimes escaped
          try {
            elementorData = JSON.parse(meta['_elementor_data'].replace(/\\"/g, '"').replace(/\\\\/g, '\\'));
          } catch (e2) {}
        }
      }

      const seo = {
        title: meta['_yoast_wpseo_title'] || title,
        description: meta['_yoast_wpseo_metadesc'] || '',
        canonical: meta['_yoast_wpseo_canonical'] || link,
        opengraphTitle: meta['_yoast_wpseo_opengraph-title'] || '',
        opengraphDescription: meta['_yoast_wpseo_opengraph-description'] || '',
        opengraphImage: meta['_yoast_wpseo_opengraph-image'] || ''
      };

      if (postType === 'page') {
        pages.push({
          id: postId,
          title,
          slug,
          status,
          link,
          publishedAt,
          author,
          seo,
          excerpt,
          contentLength: content.length,
          hasElementor: !!elementorData,
          elementorElementCount: Array.isArray(elementorData) ? elementorData.length : 0,
          metaKeys: Object.keys(meta).filter(k => !k.startsWith('_elementor_data'))
        });
        // Save full page content to separate file for easy reading
        if (!fs.existsSync('extracted_pages')) fs.mkdirSync('extracted_pages');
        fs.writeFileSync(`extracted_pages/${slug || postId}.json`, JSON.stringify({
          id: postId,
          title,
          slug,
          status,
          link,
          seo,
          content,
          elementorData,
          meta
        }, null, 2));
      } else if (postType === 'post') {
        posts.push({
          id: postId,
          title,
          slug,
          status,
          link,
          publishedAt,
          seo,
          content,
          excerpt
        });
      } else if (postType === 'attachment') {
        const attachmentUrl = item['wp:attachment_url'] ? item['wp:attachment_url'][0] : '';
        attachments.push({
          id: postId,
          title,
          url: attachmentUrl,
          alt: meta['_wp_attachment_image_alt'] || '',
          caption: excerpt
        });
      } else if (postType === 'elementor_library') {
        elementorLibrary.push({
          id: postId,
          title,
          slug,
          type: meta['_elementor_template_type'] || 'section',
          elementorData
        });
      } else if (postType === 'nav_menu_item') {
        navMenuItems.push({
          id: postId,
          title,
          url: meta['_menu_item_url'] || '',
          type: meta['_menu_item_type'] || '',
          object: meta['_menu_item_object'] || '',
          objectId: meta['_menu_item_object_id'] || '',
          menuOrder: item['wp:menu_order'] ? item['wp:menu_order'][0] : 0,
          parent: meta['_menu_item_menu_item_parent'] || '0'
        });
      } else if (postType === 'wpcf7_contact_form') {
        contactForms.push({
          id: postId,
          title,
          content
        });
      }
    });

    console.log(`Processed:`);
    console.log(`- Pages: ${pages.length}`);
    console.log(`- Posts: ${posts.length}`);
    console.log(`- Attachments: ${attachments.length}`);
    console.log(`- Elementor Templates: ${elementorLibrary.length}`);
    console.log(`- Nav Menu Items: ${navMenuItems.length}`);
    console.log(`- Contact Forms: ${contactForms.length}`);

    fs.writeFileSync('migrated_content.json', JSON.stringify({
      pagesSummary: pages,
      posts,
      navMenuItems,
      contactForms,
      elementorTemplatesSummary: elementorLibrary.map(t => ({ id: t.id, title: t.title, slug: t.slug, type: t.type }))
    }, null, 2));

    fs.writeFileSync('all_attachments.json', JSON.stringify(attachments, null, 2));
    console.log('Saved migrated_content.json and all_attachments.json successfully!');
  });
});
