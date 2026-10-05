import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Round Steel Thali Platter Image (Exact from Screenshots 3 & 4) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-72 sm:w-96 lg:w-[420px] aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-gray-100">
              <Image
                src="/images/migrated/menu-north-thali-e1772186014264.jpg"
                alt="About Samko Arya Bhavan Indian Vegetarian Thali"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Heading & Narrative (Exact text from screenshots 3, 4, 5) */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide uppercase text-[#344e41]">
              ABOUT SAMKO ARYA BHAVAN
            </h2>

            <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed font-sans">
              <p>
                Welcome to Arya Bhavan, London’s favourite Indian vegetarian restaurant, proudly serving authentic Indian vegetarian cuisine across Central London, Wembley, Tooting. As a South Indian restaurant vegetarian lovers adore, we offer everything from traditional South Indian vegetarian dishes, South and North Indian thali’s, crispy dosa near me, and South Indian breakfast near me options. Our menu is 100% vegetarian, with dedicated vegan restaurant choices and Jain and vegan food restaurant selections for those who prefer specialised diets.
              </p>

              <p>
                Families choose us as their go-to family-friendly Indian vegetarian restaurant, while food lovers rate us among the top-rated Indian veg restaurants near me and the best dosa restaurant in London. We also provide 100% pure vegetarian catering services, including live dosa catering and outdoor catering for weddings, parties, and corporate events... the true taste of India right here in London’s most loved neighbourhoods.
              </p>

              <p>
                Inspired by authentic Indian flavours and expanding our legacy with branches in France, Belgium, Singapore, and the United Kingdom, Arya Bhavan continues to be a trusted South Indian vegetarian restaurant for diners everywhere.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
