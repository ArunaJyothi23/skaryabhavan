import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* Left Column: Full-height rectangular thali platter flush to the left screen edge */}
        <div className="relative w-full min-h-[340px] sm:min-h-[440px] lg:min-h-[540px]">
          <Image
            src="/images/migrated/menu-north-thali-e1772186014264.jpg"
            alt="About Samko Arya Bhavan Indian Vegetarian Thali"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Column: Heading & Narrative */}
        <div className="flex flex-col justify-center py-10 sm:py-12 lg:py-16 px-6 sm:px-10 lg:pl-12 lg:pr-14 max-w-2xl">
          <h2 className="font-ivymode text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-[1px] uppercase text-[#344E41] leading-tight mb-5">
            ABOUT SAMKO ARYA BHAVAN
          </h2>

          <div className="space-y-4 text-[15px] sm:text-[16px] leading-[26px] text-[#737373] font-josefin">
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
