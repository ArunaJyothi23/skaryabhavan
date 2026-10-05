async function inspect() {
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  try {
    const res = await globalThis.fetch('https://skaryabhavan.com/wp-json/wp/v2/pages?per_page=100');
    console.log('Pages status:', res.status);
    if (res.ok) {
      const pages = await res.json();
      console.log('Found', pages.length, 'pages:');
      pages.forEach(p => console.log(`- [${p.id}] ${p.slug}: "${p.title.rendered}" (${p.link})`));
    } else {
      console.log('Pages body:', await res.text());
    }

    const postsRes = await globalThis.fetch('https://skaryabhavan.com/wp-json/wp/v2/posts?per_page=100');
    console.log('Posts status:', postsRes.status);
    if (postsRes.ok) {
      const posts = await postsRes.json();
      console.log('Found', posts.length, 'posts:');
      posts.forEach(p => console.log(`- [${p.id}] ${p.slug}: "${p.title.rendered}"`));
    }

    const mediaRes = await globalThis.fetch('https://skaryabhavan.com/wp-json/wp/v2/media?per_page=100');
    console.log('Media status:', mediaRes.status);
    if (mediaRes.ok) {
      const media = await mediaRes.json();
      console.log('Found', media.length, 'media items on page 1');
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

inspect();
