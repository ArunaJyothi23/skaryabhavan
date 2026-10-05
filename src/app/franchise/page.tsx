import type { Metadata } from 'next';
import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seoService';
import { Award, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import CateringInquiryForm from '@/components/CateringInquiryForm';
import FranchiseLocations from '@/components/FranchiseLocations';

export const metadata: Metadata = buildPageMetadata('/franchise');

export default function FranchisePage() {
  const perks = [
    {
      icon: Award,
      title: 'Established European Brand',
      desc: 'Join a recognized culinary brand with multiple successful branches across London, Paris, and Brussels.'
    },
    {
      icon: TrendingUp,
      title: 'Strong Unit Economics',
      desc: 'High customer lifetime value driven by repeat dine-in footfall, takeaway demand, and event catering.'
    },
    {
      icon: Users,
      title: 'Comprehensive Training',
      desc: 'Complete kitchen staff and manager training, standard operating procedures, and centralized recipe consistency.'
    },
    {
      icon: ShieldCheck,
      title: 'Supply Chain & Sourcing',
      desc: 'Access to proprietary spice blends, stone-ground batter equipment, and high-volume supplier pricing.'
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Banner (Exact from live site) */}
      <section className="relative w-full h-72 sm:h-96 bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="/images/migrated/NKAryaBhavan-Wembley-3.jpeg"
          alt="Franchise Samko Arya Bhavan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 space-y-2">
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-wide">
            Franchise
          </h1>
          <p className="text-base sm:text-xl font-light text-white tracking-wider">
            Franchise Opportunities with Samko Arya Bhavan
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Narrative & Benefits */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#344e41] uppercase tracking-wide">
            Franchise Opportunities with Arya Bhavan
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed font-sans">
            We are excited to announce that Arya Bhavan is now open for franchising! If you’re interested in joining our growing family, please fill out the contact form below. Our team will get in touch with you shortly to discuss the next steps.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed font-sans">
            We look forward to partnering with passionate individuals ready to bring the Arya Bhavan experience to new locations!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-[#fdfaf6] p-6 rounded-2xl border border-gray-100 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#6d1007] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-gray-900 mb-1">{p.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-serif font-bold text-[#344e41] mb-1 uppercase tracking-wide text-center">
            Apply for a Franchise Partnership
          </h3>
          <p className="text-xs text-gray-500 mb-6 font-sans text-center">
            Submit your details below and our management team will reach out with the prospectus.
          </p>
          <CateringInquiryForm defaultService="Franchise Inquiry" />
        </div>

        {/* Current Franchise Locations */}
        <FranchiseLocations />

      </div>
    </main>
  );
}
