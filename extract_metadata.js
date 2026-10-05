const fs = require('fs');

function getPageDetails(slug) {
  const p = JSON.parse(fs.readFileSync(`extracted_pages/${slug}.json`, 'utf8'));
  console.log(`\n=================== ${slug.toUpperCase()} ===================`);
  console.log('Title:', p.title);
  console.log('SEO:', p.seo);

  // Extract phone numbers, addresses, emails, opening hours from raw text
  const raw = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  const phones = raw.match(/(\+?44\s?[\d\s]{9,13}|020\s?[\d\s]{7,10}|07[\d\s]{9,10})/g) || [];
  const emails = raw.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
  const postcodes = raw.match(/[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}/gi) || [];

  console.log('Detected Phones:', Array.from(new Set(phones)));
  console.log('Detected Emails:', Array.from(new Set(emails)));
  console.log('Detected UK Postcodes:', Array.from(new Set(postcodes)));
  console.log('Content Excerpt:\n', raw.slice(0, 600));
}

['central-london', 'wembley', 'tooting', 'contact-us', 'about-us', 'franchise'].forEach(getPageDetails);
