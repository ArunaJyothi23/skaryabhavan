import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white overflow-hidden w-full">
      <div className="grid w-full grid-cols-1 items-stretch lg:grid-cols-[48%_52%]">
        
        {/* Left image column: full-bleed cover flush to the left screen edge, matching live site */}
        <div className="relative h-[420px] w-full min-h-[420px] overflow-hidden bg-[#201c1a] sm:h-[500px] lg:h-[600px] lg:min-h-0">
          {/* Live layout uses a full-bleed cover image, not a floating contained plate. */}
          <Image
            src="/images/migrated/menu-north-thali-e1772186014264.jpg"
            alt="About Samko Arya Bhavan Indian Vegetarian Thali"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </div>

        {/* Right text column uses the live site's narrower inset and display typography. */}
        <div className="flex w-full flex-col justify-center px-5 py-10 sm:py-14 lg:py-[50px] lg:pl-5 lg:pr-[30px]">
          <h2 className="font-ivymode mb-5 text-[26px] font-semibold uppercase leading-[1.25] tracking-[1px] text-[#344E41] sm:text-[28px] lg:text-[32px] lg:leading-[56px]">
            ABOUT SAMKO ARYA BHAVAN
          </h2>

          <div className="space-y-4 font-['Josefin_Sans',sans-serif] text-[16px] font-normal leading-[1.4] text-[#202020] lg:text-[18px] lg:leading-[1.55]">
            <p>
              Welcome to Arya Bhavan, London’s favourite Indian vegetarian restaurant, proudly serving authentic Indian vegetarian cuisine across Central London, Wembley, Tooting. As a South Indian restaurant vegetarian lovers adore, we offer everything from traditional South Indian vegetarian dishes, South and North Indian thali’s, crispy dosa near me, and South Indian breakfast near me options. Our menu is 100% vegetarian, with dedicated vegan restaurant choices and Jain and vegan food restaurant selections for those who prefer specialised diets. Families choose us as their go-to family-friendly Indian vegetarian restaurant, while food lovers rate us among the top-rated Indian veg restaurants near me and the best dosa restaurant in London. We also provide 100% pure vegetarian catering services, including live dosa catering and outdoor catering for weddings, parties, and corporate events. Discover the true taste of India right here in London’s most loved neighbourhoods.
            </p>

            <p>
              Inspired by authentic Indian flavours and expanding our legacy with branches in France, Belgium, Singapore, and the United Kingdom, Arya Bhavan continues to be a trusted South Indian vegetarian restaurant for diners everywhere.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
