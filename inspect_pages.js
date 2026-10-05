const fs = require('fs');

function inspectPage(slug) {
  const filePath = `extracted_pages/${slug}.json`;
  if (!fs.existsSync(filePath)) {
    console.log(`Page ${slug} not found`);
    return;
  }
  const page = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  console.log(`\n=================== PAGE: ${page.title} (${slug}) ===================`);
  console.log('Status:', page.status, '| Link:', page.link);
  console.log('SEO Title:', page.seo?.title);
  console.log('SEO Desc:', page.seo?.description);
  console.log('Content preview (first 500 chars):\n', page.content.slice(0, 500));
}

['nagerkovil-arya-bhavan', 'about-us', 'contact-us', 'menu', 'menu-scan', 'outdoor-catering', 'live-dosa-catering', 'branches', 'central-london', 'wembley', 'tooting', 'franchise', 'privacy-policy', 'terms-and-disclaimer'].forEach(inspectPage);
