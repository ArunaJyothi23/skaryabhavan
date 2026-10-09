import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seoService';

export const metadata: Metadata = buildPageMetadata('/about-us', {
  title: 'About Us – Samko Arya Bhavan',
  description:
    'Learn about Samko Arya Bhavan, our heritage from Kanyakumari to London, and our 100% pure Indian vegetarian and vegan culinary excellence.',
});

const features = [
  {
    icon: '/images/migrated/Screenshot-2026-02-25-103420.png',
    title: 'Traditional recipes',
  },
  {
    icon: '/images/migrated/Screenshot-2026-02-25-103428.png',
    title: 'Freshly prepared daily',
  },
  {
    icon: '/images/migrated/Screenshot-2026-02-25-103446.png',
    title: 'Family friendly dining',
  },
  {
    icon: '/images/migrated/Screenshot-2026-02-25-103437.png',
    title: 'Vegan & Jain friendly',
  },
];

const locations = [
  {
    name: 'Wembley',
    image: '/images/migrated/NKAryaBhavan-Wembley-6.jpeg',
    desc: 'Perfect place for families and vegetarian food lovers.',
    link: '/wembley',
  },
  {
    name: 'Tooting',
    image: '/images/migrated/NKAryaBhavan-Tooting-1.jpeg',
    desc: 'Enjoy traditional dosas and South Indian favourites.',
    link: '/tooting',
  },
  {
    name: 'Central London',
    image: '/images/migrated/NKAryaBhavan-Central-London-2.jpeg',
    desc: 'Authentic South Indian vegetarian dining in the heart of London.',
    link: '/central-london',
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner (Exact from live site) */}
      <section className="relative w-full h-[380px] sm:h-[450px] lg:h-[506px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/migrated/Hero-banner-scaled.jpg"
          alt="About Us – Samko Arya Bhavan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft dark overlay matching live site */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-['Josefin_Sans',sans-serif] text-[34px] sm:text-[42px] font-normal tracking-wide">
            About Us
          </h1>
        </div>
      </section>

      {/* Let's Create Memories That Will Last a Lifetime Section */}
      <section className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left Column: South Indian Thali Feast Image */}
          <div className="relative w-full min-h-[360px] sm:min-h-[460px] lg:min-h-[580px]">
            <Image
              src="/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-11.jpeg"
              alt="South Indian Traditional Vegetarian Thali Feast"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Narrative & 4 Feature Badges */}
          <div className="px-6 sm:px-10 lg:px-14 py-10 lg:py-16 flex flex-col justify-center">
            <h2 className="text-[#344E41] font-serif text-[26px] sm:text-[32px] lg:text-[34px] font-semibold uppercase tracking-[1px] leading-tight mb-5">
              LET’S CREATE MEMORIES THAT WILL LAST A LIFETIME.
            </h2>

            <div className="space-y-4 text-[#202020] font-['Josefin_Sans',sans-serif] text-[15px] sm:text-[16px] leading-[1.7] mb-8">
              <p>
                Our journey began with the hope and determination to carry a piece of India with us
                wherever we go, and share our love and joy with you. Like pockets of delectable
                delicacies nestled among the busy streets of Tooting, Wembley, and London, the flavour
                and aroma of Kanyakumari is never far away.
              </p>
              <p>
                Our dishes pay homage to the traditional cuisine of South India, concentrating on
                vegetarian and vegan options, seamlessly blending our flavours and authentic spices to
                create dishes suitable for a diverse audience, and ensure an exceptional dining
                experience. Every dish tells a story, and this is our opportunity to share the story
                with you, and embark on a culinary journey that transcends through time.
              </p>
            </div>

            {/* 4 Feature Badges (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-[#EBE6E0] rounded-[10px] p-2.5 px-3.5 flex items-center gap-3.5 transition-all duration-300 hover:shadow-[1px_1px_8px_1px_#F68422]"
                >
                  <div className="relative w-10 h-10 shrink-0">
                    <Image
                      src={feat.icon}
                      alt={feat.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[#000000] font-['Josefin_Sans',sans-serif] font-bold text-[15px] sm:text-[16px] leading-snug">
                    {feat.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations in the UK Section */}
      <section className="py-[50px] lg:py-[60px] px-4 sm:px-6 lg:px-8 bg-[#ECE6DF]">
        <div className="max-w-[1240px] mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-[#344E41] font-serif text-[26px] sm:text-[32px] font-semibold tracking-[1px] uppercase leading-tight">
              OUR LOCATIONS IN THE UK
            </h2>
          </div>

          {/* 3 Locations Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[10px] p-[10px] pb-6 flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-[2px_0px_9px_1px_rgba(245,133,34,0.59)] shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
              >
                <div>
                  {/* Branch Interior Image */}
                  <div className="w-full h-[245px] rounded-[6px] overflow-hidden relative bg-gray-100">
                    <Image
                      src={loc.image}
                      alt={`Arya Bhavan ${loc.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-2 pt-3">
                    {/* Location Pin Icon Badge */}
                    <div className="w-11 h-11 rounded-full bg-[#EAEDEC] flex items-center justify-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 1024 1024"
                        className="text-[#344B42] fill-current"
                      >
                        <path d="M512 992c9.6 0 16-3.2 22.4-9.6 16-16 361.6-368 361.6-598.4C896 144 700.8 0 512 0S128 144 128 384c0 227.2 345.6 582.4 361.6 598.4 6.4 6.4 12.8 9.6 22.4 9.6zm0-928c156.8 0 320 121.6 320 320 0 172.8-243.2 444.8-320 528-76.8-80-320-355.2-320-528 0-198.4 163.2-320 320-320zm128 320c0-70.4-57.6-128-128-128s-128 57.6-128 128 57.6 128 128 128 128-57.6 128-128zm-192 0c0-35.2 28.8-64 64-64s64 28.8 64 64-28.8 64-64 64-64-28.8-64-64z" />
                      </svg>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-black mb-2">
                      {loc.name}
                    </h3>
                    <p className="text-sm text-[#555555] font-['Josefin_Sans',sans-serif] leading-relaxed mb-6">
                      {loc.desc}
                    </p>
                  </div>
                </div>

                {/* View More Button */}
                <div className="px-2">
                  <Link
                    href={loc.link}
                    className="inline-block bg-[#F68422] hover:bg-[#366732] text-white font-['Josefin_Sans',sans-serif] text-[18px] sm:text-[20px] font-semibold px-4 py-2 rounded-[4px] transition-colors duration-300"
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* South Indian Dosas, Idlis & More Heading Section */}
      <section className="py-14 sm:py-20 px-4 text-center bg-white">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-[#344E41] font-serif text-[26px] sm:text-[32px] font-semibold tracking-[1px] uppercase leading-tight">
            SOUTH INDIAN DOSAS, IDLIS &amp; MORE
          </h2>
        </div>
      </section>
    </main>
  );
}
