const fs = require('fs');
const path = require('path');

const dataDir = path.resolve(__dirname, 'src', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Load parsed menu
const parsed = JSON.parse(fs.readFileSync('parsed_menu.json', 'utf8'));
const imageMapping = fs.existsSync('image_mapping.json') ? JSON.parse(fs.readFileSync('image_mapping.json', 'utf8')) : {};

// Assign nice categorized tags based on dish names
function categorizeDish(dish) {
  const name = dish.name.toLowerCase();
  if (name.includes('dosa') || name.includes('uthappam') || name.includes('roast') || name.includes('oothappam')) {
    return 'Dosa Corner';
  }
  if (name.includes('idly') || name.includes('vadai') || name.includes('vada') || name.includes('sambar vadai') || name.includes('poori') || name.includes('chappathi') || name.includes('pongal')) {
    return 'Tiffins & Starters';
  }
  if (name.includes('masala') || name.includes('paneer') && !name.includes('rice') && !name.includes('noodle') && !name.includes('naan') && !name.includes('65') || name.includes('palak') || name.includes('mutter') || name.includes('kadai') || name.includes('chettinadu') || name.includes('rogan josh') || name.includes('dal') || name.includes('baingan') || name.includes('kurma')) {
    return 'Curries & Gravies';
  }
  if (name.includes('biryani') || name.includes('pulao') || name.includes('rice') && !name.includes('noodle')) {
    return 'Biryani & Rice';
  }
  if (name.includes('naan') || name.includes('roti') || name.includes('kulcha') || name.includes('paratha') || name.includes('parotta')) {
    return 'Tandoori Breads';
  }
  if (name.includes('65') || name.includes('chilli') && !name.includes('naan') || name.includes('manchurian') || name.includes('crispy') || name.includes('roll') || name.includes('pepper fry') || name.includes('lollipop') || name.includes('bhindi fry')) {
    return 'Indo-Chinese Starters';
  }
  if (name.includes('noodle') || name.includes('fried rice') || name.includes('momo')) {
    return 'Noodles & Fried Rice';
  }
  if (name.includes('payasam') || name.includes('jamun') || name.includes('rasmalai') || name.includes('kesari') || name.includes('falooda') || name.includes('ice cream') || name.includes('halwa')) {
    return 'Desserts';
  }
  if (name.includes('coffee') || name.includes('tea') || name.includes('chai') || name.includes('lassi') || name.includes('juice') || name.includes('badam milk')) {
    return 'Beverages';
  }
  return 'Chef Specials';
}

const categorizedDishes = parsed.dishes.map((dish, idx) => {
  const cat = categorizeDish(dish);
  // Resolve image if mapped
  let localImg = dish.image;
  if (imageMapping[dish.image]) {
    localImg = imageMapping[dish.image];
  } else if (dish.image) {
    const fn = path.basename(dish.image.split('?')[0]);
    if (fs.existsSync(path.resolve(__dirname, 'public', 'images', 'migrated', fn))) {
      localImg = `/images/migrated/${fn}`;
    }
  }

  // Price estimate (if not explicitly given in elementor)
  let price = '£6.95';
  if (cat === 'Tiffins & Starters') price = '£5.95';
  if (cat === 'Dosa Corner') price = '£7.95';
  if (cat === 'Curries & Gravies') price = '£8.95';
  if (cat === 'Biryani & Rice') price = '£8.50';
  if (cat === 'Tandoori Breads') price = '£3.50';
  if (cat === 'Indo-Chinese Starters') price = '£7.50';
  if (cat === 'Noodles & Fried Rice') price = '£7.95';
  if (cat === 'Desserts') price = '£4.50';
  if (cat === 'Beverages') price = '£3.25';

  return {
    id: `dish-${idx + 1}`,
    name: dish.name,
    category: cat,
    description: dish.description || 'Prepared with authentic South Indian traditional spices and fresh ingredients.',
    price: price,
    image: localImg,
    vegan: dish.vegan,
    glutenFree: dish.glutenFree,
    jain: dish.jain,
    bestseller: idx < 12 || /masala dosa|medhu vadai|biryani|paneer butter/i.test(dish.name)
  };
});

fs.writeFileSync(path.join(dataDir, 'menu.json'), JSON.stringify(categorizedDishes, null, 2));

// Branches data
const branches = [
  {
    id: 'central-london',
    name: 'Central London',
    area: 'Leicester Square / Charing Cross',
    address: '17 Charing Cross Road, Charing Cross, London',
    postcode: 'WC2H 0EP',
    phone: '+44 20 7839 8797',
    displayPhone: '020 7839 8797',
    hours: '10:00 AM – 10:00 PM (Mon – Sun)',
    features: ['Dine-In', 'Takeaway', 'Delivery', 'Online Ordering'],
    image: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
    orderUrl: '/online-ls-menu',
    slug: 'central-london',
    mapQuery: '17+Charing+Cross+Rd,+London+WC2H+0EP'
  },
  {
    id: 'wembley',
    name: 'Wembley Central',
    area: 'Ealing Road',
    address: '22, 22A Ealing Rd, Wembley',
    postcode: 'HA0 4TL',
    phone: '+44 20 8900 8526',
    displayPhone: '020 8900 8526',
    hours: '09:30 AM – 10:00 PM (Mon – Sun)',
    features: ['Dine-In', 'Takeaway', 'Pure Veg & Vegan', 'Family Seating'],
    image: '/images/migrated/NKAryaBhavan-Wembley-1.jpeg',
    orderUrl: '/menu',
    slug: 'wembley',
    mapQuery: '22+Ealing+Rd,+Wembley+HA0+4TL'
  },
  {
    id: 'tooting',
    name: 'Tooting',
    area: 'Upper Tooting Road',
    address: '254 Upper Tooting Rd, London',
    postcode: 'SW17 0DN',
    phone: '+44 20 8355 3555',
    displayPhone: '020 8355 3555',
    hours: '10:00 AM – 10:00 PM (Mon – Sun)',
    features: ['Dine-In', 'Takeaway', 'Traditional South Indian Thalis', 'Private Bookings'],
    image: '/images/migrated/NKAryaBhavan-Tooting-1.jpeg',
    orderUrl: '/menu',
    slug: 'tooting',
    mapQuery: '254+Upper+Tooting+Rd,+London+SW17+0DN'
  }
];

fs.writeFileSync(path.join(dataDir, 'branches.json'), JSON.stringify(branches, null, 2));

// Complete site content baseline
const siteContent = {
  general: {
    siteName: 'Arya Bhavan London',
    tagline: 'Authentic South Indian Pure Vegetarian & Vegan Cuisine',
    description: 'Welcome to Arya Bhavan (Nagerkovil Arya Bhavan UK) - London’s premier authentic South Indian vegetarian restaurant located in Central London (Leicester Square), Wembley, and Tooting. Specializing in stone-ground dosas, traditional thalis, vegan, and Jain delicacies.',
    email: 'eventsnkab@gmail.com',
    cateringEmail: 'catering@skaryabhavan.com',
    primaryPhone: '+44 20 7839 8797',
    primaryAddress: '17 Charing Cross Road, Charing Cross, London WC2H 0EP',
    social: {
      facebook: 'https://facebook.com/skaryabhavan',
      instagram: 'https://instagram.com/skaryabhavan',
      whatsapp: 'https://wa.me/442078398797'
    }
  },
  hero: {
    badge: '100% Pure Vegetarian & Vegan Heritage',
    title: 'Authentic South Indian Vegetarian Feasts in London',
    subtitle: 'Experience stone-ground crispy dosas, traditional sambar, steaming idlis, and royal thalis crafted with authentic heritage recipes from Kanyakumari and Chennai.',
    primaryCtaText: 'Explore Our Menu',
    primaryCtaLink: '/menu',
    secondaryCtaText: 'Book Event Catering',
    secondaryCtaLink: '/live-dosa-catering',
    stats: [
      { number: '3+', label: 'Prime London Locations' },
      { number: '200+', label: 'Pure Veg & Vegan Dishes' },
      { number: '100%', label: 'Stone Ground Batter' },
      { number: '4.8★', label: 'Over 5,000+ Reviews' }
    ]
  },
  about: {
    badge: 'Our Culinary Heritage',
    title: 'From Nagerkovil & Kanyakumari to the Streets of London',
    narrative: [
      'Our journey began with the hope and determination to carry a piece of South India with us wherever we go, and share our culinary love and joy with you.',
      'Nestled among the vibrant streets of Central London (Charing Cross), Wembley, and Tooting, the intoxicating aroma of roasted curry leaves, stone-ground fermented batter, and freshly ground spices welcomes you home.',
      'Every dish pays homage to authentic South Indian culinary wisdom. We specialize in 100% pure vegetarian, vegan, and Jain-friendly cuisine, seamlessly blending rich tradition with impeccable modern hospitality.'
    ],
    features: [
      'Authentic Stone-Ground Fermented Rice & Lentil Batter',
      'Original Kanyakumari & Chettinad Spice Blends',
      'Pure Vegetarian, Vegan & Jain Certified Offerings',
      'Fresh Daily Preparations with Pure Ghee & Coconut Oils'
    ]
  },
  catering: {
    badge: 'Event & Wedding Services',
    title: 'Award-Winning Live Dosa & Outdoor Catering',
    subtitle: 'Bring our authentic live dosa station and lavish buffet spreads directly to your home, wedding, corporate event, or milestone celebration anywhere across London and the UK.',
    liveDosa: {
      title: 'Live Dosa Station at Your Venue',
      desc: 'Our master chefs bring commercial griddles to your event, churning out piping-hot, paper-thin crispy dosas customized on the spot for your guests with unlimited sambar and fresh coconut chutneys.',
      link: '/live-dosa-catering'
    },
    outdoor: {
      title: 'Grand Outdoor Buffets & Banquets',
      desc: 'Comprehensive multi-course catering packages (Options 1–9) covering starters, fragrant dum biryanis, rich paneer gravies, hot tandoori breads, and traditional festive desserts.',
      link: '/outdoor-catering'
    }
  },
  whyChooseUs: [
    {
      title: '100% Pure Vegetarian',
      desc: 'Completely vegetarian kitchens with strict adherence to pure vegetarian, vegan, and Jain dietary principles.'
    },
    {
      title: 'Heritage Stone Ground',
      desc: 'Our batters and signature masalas are stone ground to preserve centuries-old texture and authentic aroma.'
    },
    {
      title: '3 Iconic UK Locations',
      desc: 'Conveniently located in Central London (Leicester Square), Wembley Central (Ealing Rd), and Tooting.'
    },
    {
      title: 'Live Chef Dosa Stations',
      desc: 'Specialized mobile stations serving theatrical, freshly spun dosas directly at your private gatherings.'
    }
  ],
  faqs: [
    {
      q: 'Are all dishes 100% pure vegetarian?',
      a: 'Yes, 100% of our menu across all locations is strictly pure vegetarian. We have zero meat or egg products in our kitchens.'
    },
    {
      q: 'Do you offer Vegan and Jain options?',
      a: 'Absolutely. A large majority of our dosas, idlis, tiffins, and vegetable curries are naturally vegan or can be prepared without onion and garlic for Jain dietary requirements.'
    },
    {
      q: 'How can I book Live Dosa or Outdoor Catering?',
      a: 'You can submit an inquiry through our dedicated Live Dosa Catering or Outdoor Catering pages, or call our events team directly at 020 7839 8797.'
    },
    {
      q: 'Do you take table reservations?',
      a: 'We accommodate both reservations and walk-ins. For busy weekend dinners and large groups of 6 or more, we recommend contacting your preferred branch in advance.'
    }
  ],
  web3forms: {
    email: 'eventsnkab@gmail.com',
    accessKey: ''
  }
};

fs.writeFileSync(path.join(dataDir, 'site_content.json'), JSON.stringify(siteContent, null, 2));

console.log('Generated src/data/menu.json (', categorizedDishes.length, 'dishes)');
console.log('Generated src/data/branches.json (3 branches)');
console.log('Generated src/data/site_content.json');
