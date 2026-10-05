import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Priya Sharma',
      source: 'Google Review • Central London',
      stars: 5,
      comment: 'The Masala Dosa and Filter Coffee at Leicester Square is unmatched in London! The sambar has that authentic home-style flavor that reminds me of Chennai. Outstanding service!'
    },
    {
      name: 'Rohan Patel',
      source: 'Google Review • Wembley',
      stars: 5,
      comment: 'Best pure vegetarian restaurant in Wembley. We booked their Live Dosa Catering for our daughter’s birthday party last month and guests are still talking about how delicious and crispy the dosas were.'
    },
    {
      name: 'Sarah Jenkins',
      source: 'TripAdvisor • Tooting',
      stars: 5,
      comment: 'Such a warm, welcoming restaurant. As a vegan, finding food that is 100% pure and clearly marked is fantastic. The Gobi 65 and Paneer Tikka Masala were heavenly!'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#fdfaf6] border-y border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 tracking-tight">
            Loved by Over 5,000+ Diners Across London
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Read what our wonderful guests have to say about their dining and catering experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-orange-200 mb-4" />
                <p className="text-sm text-gray-700 italic leading-relaxed mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-gray-900">{rev.name}</h4>
                  <p className="text-[11px] text-gray-500">{rev.source}</p>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
