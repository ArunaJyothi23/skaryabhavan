import React from 'react';
import { Utensils, Sparkles } from 'lucide-react';

interface Props {
  categories: Record<string, string[]>;
}

export default function DishesBrowser({ categories }: Props) {
  const categoryNames = Object.keys(categories);

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categoryNames.map((catName) => {
          const items = categories[catName] || [];
          return (
            <div
              key={catName}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#edf5ee] flex items-center justify-center text-[#2d5a27]">
                    <Utensils className="w-4 h-4" />
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#344e41] tracking-wide">
                    {catName}
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-[#e87722] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                  {items.length} Items
                </span>
              </div>

              <ul className="space-y-2 text-sm text-gray-700 font-sans flex-1">
                {items.map((dish, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-snug">
                    <Sparkles className="w-3.5 h-3.5 text-[#e87722] shrink-0 mt-0.5" />
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
