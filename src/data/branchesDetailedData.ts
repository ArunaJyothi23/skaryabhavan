export interface BranchData {
  slug: string;
  name: string;
  city: string;
  hasHero?: boolean;
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    bgImage: string;
    orderUrl?: string;
    buttonText?: string;
  };
  intro: {
    heading: string;
    image: string;
    imageAlt: string;
    p1: string;
    p2: string;
    p3?: string;
    p4?: string;
  };
  visitUs: {
    address: string;
    phone: string;
    googleMapsUrl: string;
    widgetType: 'sevenrooms' | 'map';
    widgetUrl: string;
  };
  whyGuestsLove: {
    description: string;
    dishImage: string;
  };
  openingHours: {
    label1: string;
    time1: string;
    label2: string;
    time2: string;
  };
  delivery: {
    uberEatsUrl: string;
    deliverooUrl: string;
    justEatUrl: string;
  };
  faqs: {
    q: string;
    a: string;
  }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  schema: {
    streetAddress: string;
    postalCode: string;
    addressLocality: string;
    addressCountry: string;
    telephone: string;
    opens: string;
    closes: string;
  };
}

export const branchesData: Record<string, BranchData> = {
  wembley: {
    slug: 'wembley',
    name: 'Wembley',
    city: 'Wembley',
    hero: {
      titleLine1: 'AUTHENTIC INDIAN VEGETARIAN',
      titleLine2: 'RESTAURANT WEMBLEY',
      subtitle: 'Top Rated Family Friendly Indian Vegetarian Restaurant',
      bgImage: '/images/migrated/sl1.jpg',
      orderUrl: 'https://onlineordering.skaryabhavan.com/popmenu-order'
    },
    intro: {
      heading: 'AUTHENTIC SOUTH INDIAN VEGETARIAN RESTAURANT WEMBLEY',
      image: '/images/migrated/NKAryaBhavan-Wembley-6.jpeg',
      imageAlt: 'Arya Bhavan Wembley Dining Hall',
      p1: 'Welcome to Arya Bhavan, Wembley’s favourite Indian vegetarian restaurant, proudly serving authentic Indian vegetarian cuisine to the local community. As a South Indian restaurant vegetarian diners love, we offer an exceptional variety of traditional South Indian vegetarian dishes, flavourful South and North Indian thalis, crispy dosa, and hearty South Indian breakfast specialties.',
      p2: 'Our menu is completely 100% vegetarian, featuring dedicated vegan restaurant options along with carefully prepared Jain selections for guests with specialised dietary needs. Families trust us as their top family-friendly Indian vegetarian restaurant, while regulars consistently rate Arya Bhavan among the top-rated Indian veg restaurants and the best dosa restaurant in Wembley. We also provide 100% pure vegetarian catering services, including live dosa catering and full outdoor catering for weddings, celebrations, and corporate events.'
    },
    visitUs: {
      address: '22 Ealing Road, Wembley, London HA0 4TL, United Kingdom',
      phone: '+44 20 8900 8526',
      googleMapsUrl: 'https://maps.google.com/?q=22+Ealing+Rd,+Wembley+HA0+4TL',
      widgetType: 'map',
      widgetUrl: 'https://maps.google.com/maps?q=22%20Ealing%20Rd,%20Wembley%20HA0%204TL&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    whyGuestsLove: {
      description: 'Located in the vibrant heart of Wembley on Ealing Road, Arya Bhavan brings the soul of South India to North West London. Our kitchen follows traditional cooking methods passed down through generations – stone-ground batters, slow-simmered sambar and freshly prepared chutneys made every morning.',
      dishImage: '/images/migrated/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg'
    },
    openingHours: {
      label1: 'Monday – Friday',
      time1: '09:30 AM – 10:00 PM.',
      label2: 'Saturday – Sunday',
      time2: '09:30 AM – 10:00 PM.'
    },
    delivery: {
      uberEatsUrl: 'https://www.ubereats.com/gb/store/arya-bhavan-wembley/goBBkP73QSSH9kqWKoU19Q',
      deliverooUrl: 'https://deliveroo.co.uk/menu/london/wembley/southbridge-ltd',
      justEatUrl: 'https://www.just-eat.co.uk/restaurants-arya-bhavan---wembley-brent/menu'
    },
    faqs: [
      {
        q: 'Do you serve vegan food?',
        a: 'Yes, many dishes on our Wembley menu are fully vegan and clearly marked with (V).'
      },
      {
        q: 'Is your kitchen completely vegetarian?',
        a: 'Yes — 100% pure vegetarian kitchen with strict separation and authentic traditional preparation.'
      },
      {
        q: 'Do you accept table reservations?',
        a: 'Yes, table reservations and walk-ins are both welcome. Call us on 020 8900 8526.'
      },
      {
        q: 'Do you provide live dosa and event catering?',
        a: 'Yes, we provide live dosa catering and outdoor catering for weddings, temple functions, and birthdays.'
      },
      {
        q: 'Are Jain-friendly options available?',
        a: 'Yes, we have freshly prepared Jain dishes without onion or garlic available upon request.'
      }
    ],
    seo: {
      title: 'Family Friendly South Indian Vegetarian Restaurant Wembley | Arya Bhavan',
      description: 'Top-rated south Indian vegetarian restaurant Wembley Central. Enjoy authentic South Indian 100% pure vegetarian cuisine, South Indian breakfast, vegan & Jain options.',
      canonical: 'https://skaryabhavan.com/wembley/'
    },
    schema: {
      streetAddress: '22 Ealing Road',
      postalCode: 'HA0 4TL',
      addressLocality: 'Wembley, London',
      addressCountry: 'GB',
      telephone: '+44 20 8900 8526',
      opens: '09:30',
      closes: '22:00'
    }
  },

  tooting: {
    slug: 'tooting',
    name: 'Tooting',
    city: 'Tooting, London',
    hero: {
      titleLine1: 'AUTHENTIC INDIAN VEGETARIAN',
      titleLine2: 'RESTAURANT TOOTING',
      subtitle: 'Top Rated Family Friendly Indian Vegetarian Restaurant',
      bgImage: '/images/migrated/sl1.jpg',
      orderUrl: 'https://onlineordering.skaryabhavan.com/popmenu-order'
    },
    intro: {
      heading: 'AUTHENTIC SOUTH INDIAN VEGETARIAN RESTAURANT TOOTING',
      image: '/images/migrated/NKAryaBhavan-Tooting-1.jpeg',
      imageAlt: 'Arya Bhavan Tooting Interior Dining Area',
      p1: 'In the heart of Tooting, Arya Bhavan stands as a beloved Indian vegetarian restaurant, celebrated for its commitment to authentic Indian vegetarian cuisine Tooting. Guests searching for crispy dosa near me Tooting, flavour-packed South and North Indian thalis, or hearty South Indian breakfast near me will find an exceptional range of choices here.',
      p2: 'Known throughout the area as a South Indian restaurant vegetarian food enthusiasts turn to, we also take pride in offering a fully 100% vegetarian menu Tooting. Our dedicated vegan restaurant selections and carefully prepared Jain dishes ensure every dietary preference is respected. For events of any size, our 100% pure vegetarian catering services bring authentic flavours directly to your celebration.'
    },
    visitUs: {
      address: '254 Upper Tooting Rd, London SW17 0DN, United Kingdom',
      phone: '+44 20 8355 3555',
      googleMapsUrl: 'https://maps.google.com/?q=254+Upper+Tooting+Rd,+London+SW17+0DN',
      widgetType: 'sevenrooms',
      widgetUrl: 'https://www.sevenrooms.com/explore/aryabhavantooting/reservations/create/search/'
    },
    whyGuestsLove: {
      description: 'Located on Upper Tooting Road in vibrant South London, Arya Bhavan brings the soul of South India to Tooting. Our kitchen follows traditional cooking methods passed down through generations – stone-ground batters, slow-simmered sambar and freshly prepared chutneys made every morning.',
      dishImage: '/images/migrated/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg'
    },
    openingHours: {
      label1: 'Monday – Friday',
      time1: '10:00 AM – 10:00 PM.',
      label2: 'Saturday – Sunday',
      time2: '10:00 AM – 10:00 PM.'
    },
    delivery: {
      uberEatsUrl: 'https://www.ubereats.com/gb/store/arya-bhavan-wembley/goBBkP73QSSH9kqWKoU19Q',
      deliverooUrl: 'https://deliveroo.co.uk/menu/london/wembley/southbridge-ltd',
      justEatUrl: 'https://www.just-eat.co.uk/restaurants-arya-bhavan---wembley-brent/menu'
    },
    faqs: [
      {
        q: 'Do you serve vegan food?',
        a: 'Yes, many dishes on our Tooting menu are 100% plant-based and clearly marked with (V).'
      },
      {
        q: 'Is your kitchen completely vegetarian?',
        a: 'Yes — strictly 100% pure vegetarian kitchen with no meat or fish on premises.'
      },
      {
        q: 'Can I book a table in advance?',
        a: 'Yes, book online through our SevenRooms reservation tool or call 020 8355 3555.'
      },
      {
        q: 'Do you offer catering in South London?',
        a: 'Yes, we provide live dosa catering and outdoor catering across South London and Surrey.'
      },
      {
        q: 'Is Jain food available?',
        a: 'Yes, Jain-friendly dishes without root vegetables are happily prepared upon request.'
      }
    ],
    seo: {
      title: 'South Indian Vegetarian Restaurant Tooting | 100% Pure | Arya Bhavan',
      description: 'Looking for the best South Indian vegetarian restaurant in Tooting? Arya Bhavan offers crispy dosas, authentic thali and traditional breakfast specials.',
      canonical: 'https://skaryabhavan.com/tooting/'
    },
    schema: {
      streetAddress: '254 Upper Tooting Rd',
      postalCode: 'SW17 0DN',
      addressLocality: 'London',
      addressCountry: 'GB',
      telephone: '+44 20 8355 3555',
      opens: '10:00',
      closes: '22:00'
    }
  },

  belgium: {
    slug: 'belgium',
    name: 'Belgium (Brussels)',
    city: 'Brussels, Belgium',
    hasHero: true,
    hero: {
      titleLine1: 'AUTHENTIC INDIAN VEGETARIAN',
      titleLine2: 'RESTAURANT BRUSSELS',
      subtitle: 'Top Rated Family Friendly Indian Vegetarian Restaurant',
      bgImage: '/images/migrated/sl1.jpg',
      buttonText: 'View Menu',
      orderUrl: '/menu'
    },
    intro: {
      heading: 'AUTHENTIC SOUTH INDIAN VEGETARIAN RESTAURANT IN BRUSSELS',
      image: '/images/migrated/WhatsApp-Image-2026-03-02-at-22.35.41.jpeg',
      imageAlt: 'Arya Bhavan Belgium Brussels Restaurant',
      p1: 'Arya Bhavan is a leading Indian vegetarian restaurant in Brussels, serving authentic South Indian flavours in the heart of the city. Guests searching for crispy dosa near me, South Indian breakfast near me, or traditional South and North Indian thali’s will find all their favourites on our menu.',
      p2: 'As a trusted South Indian restaurant vegetarian food lovers recommend, we proudly serve 100% vegetarian dishes made using time-honoured recipes. We also offer specialised vegan restaurant options and Jain and vegan food restaurant selections to meet diverse dietary needs.',
      p3: 'Known as a family-friendly Indian vegetarian restaurant in Brussels, we are frequently listed among the top-rated Indian veg restaurants near me and regarded as one of the best dosa restaurants in Brussels.',
      p4: 'For celebrations and corporate events, we provide 100% pure vegetarian catering services, including live dosa catering and professional outdoor catering across Belgium.'
    },
    visitUs: {
      address: 'Rue Jourdan 10, 1060 Saint-Gilles, Brussels, Belgium',
      phone: '+32 2 675 95 41',
      googleMapsUrl: 'https://maps.google.com/?q=Rue+Jourdan+10,+1060+Saint-Gilles,+Belgium',
      widgetType: 'map',
      widgetUrl: 'https://maps.google.com/maps?q=Rue%20Jourdan%2010,%201060%20Saint-Gilles,%20Belgium&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    whyGuestsLove: {
      description: 'Located on Rue Jourdan in Saint-Gilles, Brussels, Arya Bhavan brings the genuine soul of South Indian pure vegetarian culinary heritage to Belgium. Our kitchen follows traditional cooking methods passed down through generations – stone-ground batters, slow-simmered sambar and freshly prepared chutneys made every morning.',
      dishImage: '/images/migrated/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg'
    },
    openingHours: {
      label1: 'Monday – Thursday',
      time1: '10:30 AM – 03:00 PM | 06:00 PM – 10:30 PM.',
      label2: 'Friday – Sunday',
      time2: '10:30 AM – 10:30 PM.'
    },
    delivery: {
      uberEatsUrl: 'https://www.ubereats.com/',
      deliverooUrl: 'https://deliveroo.be/',
      justEatUrl: 'https://www.takeaway.com/be-en/'
    },
    faqs: [
      {
        q: 'Do you serve vegan food?',
        a: 'Yes, our Brussels menu has extensive vegan items made with 100% vegetable oil and no ghee.'
      },
      {
        q: 'Is the restaurant 100% pure vegetarian?',
        a: 'Yes — strictly 100% vegetarian food prepared in accordance with traditional Indian standards.'
      },
      {
        q: 'Do you take table reservations?',
        a: 'Yes, call us on +32 2 675 95 41 to book your table or for group bookings.'
      },
      {
        q: 'Is Jain food available in Brussels?',
        a: 'Yes, we prepare Jain options without onion, garlic, or root vegetables on request.'
      },
      {
        q: 'Do you offer catering in Belgium?',
        a: 'Yes, pure vegetarian indoor and outdoor catering services are available across Brussels and Belgium.'
      }
    ],
    seo: {
      title: 'Best South Indian Vegetarian Restaurant in Brussels, Belgium | Arya Bhavan',
      description: 'Arya Bhavan is a top-rated Indian vegetarian restaurant in Brussels serving crispy dosa, South Indian breakfast, thalis & vegan options. 100% pure vegetarian catering available.',
      canonical: 'https://skaryabhavan.com/belgium/'
    },
    schema: {
      streetAddress: 'Rue Jourdan 10',
      postalCode: '1060',
      addressLocality: 'Saint-Gilles, Brussels',
      addressCountry: 'BE',
      telephone: '+32 2 675 95 41',
      opens: '10:30',
      closes: '22:30'
    }
  },

  barkingside: {
    slug: 'barkingside',
    name: 'Barkingside',
    city: 'Barkingside, Ilford',
    hero: {
      titleLine1: 'AUTHENTIC INDIAN VEGETARIAN',
      titleLine2: 'RESTAURANT BARKINGSIDE',
      subtitle: 'Top Rated Family Friendly Indian Vegetarian Restaurant',
      bgImage: '/images/migrated/sl1.jpg',
      orderUrl: 'https://onlineordering.skaryabhavan.com/popmenu-order'
    },
    intro: {
      heading: 'AUTHENTIC SOUTH INDIAN VEGETARIAN RESTAURANT BARKINGSIDE',
      image: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
      imageAlt: 'Arya Bhavan Barkingside Dining Room',
      p1: 'In Barkingside, Arya Bhavan has become a standout choice for anyone seeking a true Indian vegetarian restaurant, drawing visitors from Barking, Ilford, and East Ham who appreciate genuine flavour and freshness. Our reputation is built on serving authentic Indian vegetarian cuisine, from fragrant curries to traditional South Indian vegetarian dishes.',
      p2: 'Many guests arrive in search of the best dosa restaurant, and our menu—featuring crispy dosa, wholesome South Indian breakfast, and flavour-rich South and North Indian thalis—never disappoints. As a proudly 100% vegetarian restaurant, we also offer extensive vegan restaurant specials along with carefully crafted Jain options. For celebrations of any scale, our team provides 100% pure vegetarian catering services.'
    },
    visitUs: {
      address: '43 High St, Ilford IG6 2AD, United Kingdom',
      phone: '+44 20 8355 3555',
      googleMapsUrl: 'https://maps.google.com/?q=43+High+St,+Ilford+IG6+2AD',
      widgetType: 'map',
      widgetUrl: 'https://maps.google.com/maps?q=43%20High%20St,%20Ilford%20IG6%202AD&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    whyGuestsLove: {
      description: 'Located on High Street in Barkingside, Arya Bhavan brings authentic South Indian culinary tradition to the community. Our kitchen follows traditional cooking methods passed down through generations – stone-ground batters, slow-simmered sambar and freshly prepared chutneys made every morning.',
      dishImage: '/images/migrated/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg'
    },
    openingHours: {
      label1: 'Monday – Friday',
      time1: '09:30 AM – 10:00 PM.',
      label2: 'Saturday – Sunday',
      time2: '09:30 AM – 10:00 PM.'
    },
    delivery: {
      uberEatsUrl: 'https://www.ubereats.com/gb/store/arya-bhavan-wembley/goBBkP73QSSH9kqWKoU19Q',
      deliverooUrl: 'https://deliveroo.co.uk/menu/london/wembley/southbridge-ltd',
      justEatUrl: 'https://www.just-eat.co.uk/restaurants-arya-bhavan---wembley-brent/menu'
    },
    faqs: [
      {
        q: 'Do you serve vegan food?',
        a: 'Yes, our Barkingside menu has extensive vegan items clearly marked.'
      },
      {
        q: 'Is the kitchen completely pure vegetarian?',
        a: 'Yes — strictly 100% pure vegetarian kitchen with no eggs or meat.'
      },
      {
        q: 'Do you take table reservations?',
        a: 'Yes, reservations and walk-ins are both welcome. Call 020 8355 3555.'
      },
      {
        q: 'Do you cater for family functions?',
        a: 'Yes, we provide live dosa catering and outdoor party catering across East London and Essex.'
      },
      {
        q: 'Is Jain food available?',
        a: 'Yes, dedicated Jain meals prepared without onions or garlic are available.'
      }
    ],
    seo: {
      title: 'Authentic Pure Veg South Indian Restaurant Barkingside | Arya Bhavan',
      description: '100% Pure South Indian vegetarian restaurant in Barkingside. Enjoy dosa, veg thali, vegan & Jain options. Top-rated near Barking, Ilford & East Ham. Catering available.',
      canonical: 'https://skaryabhavan.com/barkingside/'
    },
    schema: {
      streetAddress: '43 High St',
      postalCode: 'IG6 2AD',
      addressLocality: 'Ilford, London',
      addressCountry: 'GB',
      telephone: '+44 20 8355 3555',
      opens: '09:30',
      closes: '22:00'
    }
  },

  eastham: {
    slug: 'eastham',
    name: 'East Ham',
    city: 'East Ham, London',
    hero: {
      titleLine1: 'AUTHENTIC INDIAN VEGETARIAN',
      titleLine2: 'RESTAURANT EAST HAM',
      subtitle: 'Top Rated Family Friendly Indian Vegetarian Restaurant',
      bgImage: '/images/migrated/sl1.jpg',
      orderUrl: 'https://onlineordering.skaryabhavan.com/popmenu-order'
    },
    intro: {
      heading: 'AUTHENTIC SOUTH INDIAN VEGETARIAN SPECIALITIES IN EAST HAM',
      image: '/images/migrated/NKAryaBhavan-Wembley-3.jpeg',
      imageAlt: 'Arya Bhavan East Ham Interior Dining',
      p1: 'Located in the heart of East Ham, Arya Bhavan is a popular destination for authentic Indian vegetarian cuisine, serving a wide variety of traditional South and North Indian dishes. Whether you’re looking for a crispy masala dosa, a wholesome South Indian breakfast, or a delicious vegetarian thali, our menu offers something to satisfy every taste.',
      p2: 'As a trusted Indian vegetarian restaurant in East Ham, we take pride in preparing every meal using fresh ingredients and authentic recipes, ensuring a truly memorable dining experience. We cater to a wide range of dietary preferences with an extensive selection of vegan-friendly and Jain dishes. Beyond restaurant dining, we also provide 100% pure vegetarian catering services, including live dosa catering.'
    },
    visitUs: {
      address: '278A High St N, London E12 6SA, United Kingdom',
      phone: '+44 20 8355 3555',
      googleMapsUrl: 'https://maps.google.com/?q=278A+High+St+N,+London+E12+6SA',
      widgetType: 'map',
      widgetUrl: 'https://maps.google.com/maps?q=278A%20High%20St%20N,%20London%20E12%206SA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    whyGuestsLove: {
      description: 'Located on High Street North in East Ham, Arya Bhavan brings authentic South Indian culinary excellence to East London. Our kitchen follows traditional cooking methods passed down through generations – stone-ground batters, slow-simmered sambar and freshly prepared chutneys made every morning.',
      dishImage: '/images/migrated/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg'
    },
    openingHours: {
      label1: 'Monday – Friday',
      time1: '09:30 AM – 10:00 PM.',
      label2: 'Saturday – Sunday',
      time2: '09:30 AM – 10:00 PM.'
    },
    delivery: {
      uberEatsUrl: 'https://www.ubereats.com/gb/store/arya-bhavan-wembley/goBBkP73QSSH9kqWKoU19Q',
      deliverooUrl: 'https://deliveroo.co.uk/menu/london/wembley/southbridge-ltd',
      justEatUrl: 'https://www.just-eat.co.uk/restaurants-arya-bhavan---wembley-brent/menu'
    },
    faqs: [
      {
        q: 'Do you serve vegan food?',
        a: 'Yes, a wide selection of vegan dishes is available and clearly labeled on our menu.'
      },
      {
        q: 'Is the food 100% pure vegetarian?',
        a: 'Yes — strictly 100% pure vegetarian cuisine prepared in authentic South Indian tradition.'
      },
      {
        q: 'Do you accept table bookings?',
        a: 'Yes, please call 020 8355 3555 for table bookings or walk in directly.'
      },
      {
        q: 'Do you offer live dosa catering in East Ham?',
        a: 'Yes, we provide live dosa catering and outdoor catering for all celebrations across London.'
      },
      {
        q: 'Are Jain dishes available?',
        a: 'Yes, our kitchen can prepare Jain-compliant dishes without root vegetables on request.'
      }
    ],
    seo: {
      title: 'Best Indian Vegetarian Restaurant in East Ham | Arya Bhavan',
      description: 'Top-rated Indian vegetarian restaurant in East Ham serving crispy dosa, South Indian breakfast, veg thalis, vegan & Jain options. Pure vegetarian catering available.',
      canonical: 'https://skaryabhavan.com/eastham/'
    },
    schema: {
      streetAddress: '278A High St N',
      postalCode: 'E12 6SA',
      addressLocality: 'London',
      addressCountry: 'GB',
      telephone: '+44 20 8355 3555',
      opens: '09:30',
      closes: '22:00'
    }
  },

  ilford: {
    slug: 'ilford',
    name: 'Ilford',
    city: 'Ilford, Greater London',
    hero: {
      titleLine1: 'AUTHENTIC INDIAN VEGETARIAN',
      titleLine2: 'RESTAURANT ILFORD',
      subtitle: 'Top Rated Family Friendly Indian Vegetarian Restaurant',
      bgImage: '/images/migrated/sl1.jpg',
      orderUrl: 'https://onlineordering.skaryabhavan.com/popmenu-order'
    },
    intro: {
      heading: 'AUTHENTIC SOUTH INDIAN VEGETARIAN RESTAURANT ILFORD',
      image: '/images/migrated/NKAryaBhavan-Tooting-2.jpeg',
      imageAlt: 'Arya Bhavan Ilford Restaurant Interior',
      p1: 'Arya Bhavan is Ilford and Redbridge’s favourite Indian vegetarian restaurant, celebrated for its authentic South Indian flavours, crispy dosas, and royal thalis. We serve residents and visitors seeking genuine, delicious pure vegetarian dining in East London.',
      p2: 'From breakfast favourites like steamed idlis and golden medhu vadai to aromatic filter coffee and afternoon chaats, our chefs craft every dish using time-honoured techniques and fresh ingredients. We also offer 100% pure vegetarian catering services, including live dosa catering for weddings, birthdays, and corporate events across London and Essex.'
    },
    visitUs: {
      address: '43 High St, Barkingside, Ilford IG6 2AD, United Kingdom',
      phone: '+44 20 8355 3555',
      googleMapsUrl: 'https://maps.google.com/?q=43+High+St,+Barkingside,+Ilford+IG6+2AD',
      widgetType: 'map',
      widgetUrl: 'https://maps.google.com/maps?q=43%20High%20St,%20Barkingside,%20Ilford%20IG6%202AD&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    whyGuestsLove: {
      description: 'Located in Ilford, Arya Bhavan brings authentic South Indian pure vegetarian culinary heritage to East London. Our kitchen follows traditional cooking methods passed down through generations – stone-ground batters, slow-simmered sambar and freshly prepared chutneys made every morning.',
      dishImage: '/images/migrated/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg'
    },
    openingHours: {
      label1: 'Monday – Friday',
      time1: '09:30 AM – 10:00 PM.',
      label2: 'Saturday – Sunday',
      time2: '09:30 AM – 10:00 PM.'
    },
    delivery: {
      uberEatsUrl: 'https://www.ubereats.com/gb/store/arya-bhavan-wembley/goBBkP73QSSH9kqWKoU19Q',
      deliverooUrl: 'https://deliveroo.co.uk/menu/london/wembley/southbridge-ltd',
      justEatUrl: 'https://www.just-eat.co.uk/restaurants-arya-bhavan---wembley-brent/menu'
    },
    faqs: [
      {
        q: 'Do you serve vegan food?',
        a: 'Yes, we have many vegan choices prepared with pure vegetable oil and freshly ground spices.'
      },
      {
        q: 'Is the kitchen 100% vegetarian?',
        a: 'Yes — strictly 100% pure vegetarian kitchen with no meat, fish, or eggs.'
      },
      {
        q: 'Can I book a table in advance?',
        a: 'Yes, reservations are welcomed. Call 020 8355 3555 or drop in.'
      },
      {
        q: 'Do you offer party and wedding catering?',
        a: 'Yes, we provide full live dosa catering and outdoor buffet catering throughout Ilford and Essex.'
      },
      {
        q: 'Is Jain food available?',
        a: 'Yes, our kitchen can prepare Jain meals without onion or garlic on request.'
      }
    ],
    seo: {
      title: 'Top-Rated South Indian Vegetarian Restaurant Ilford | Arya Bhavan',
      description: 'Enjoy authentic South Indian vegetarian food in Ilford. Delicious crispy dosas, idlis, thalis, vegan & Jain options. Catering services available.',
      canonical: 'https://skaryabhavan.com/ilford/'
    },
    schema: {
      streetAddress: '43 High St, Barkingside',
      postalCode: 'IG6 2AD',
      addressLocality: 'Ilford, Greater London',
      addressCountry: 'GB',
      telephone: '+44 20 8355 3555',
      opens: '09:30',
      closes: '22:00'
    }
  }
};
