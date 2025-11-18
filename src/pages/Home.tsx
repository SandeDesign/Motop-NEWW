import React, { memo } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Trophy, Clock } from 'lucide-react';
import { motorPackages, alaCarteItems } from '../data/packages';
import { faqData } from '../data/content';

const Home: React.FC = () => {
  const motorAlaCarteItems = alaCarteItems.filter(item => item.type === 'motor' || item.type === 'both');

  return (
    <div className="min-h-screen">
      {/* Hero Section - OPTIMIZED */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
        {/* Animated gradient background - MINDER BLUR */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-yellow-950 opacity-70"></div>
          
          {/* Reduced blur for performance - blur-2xl instead of blur-3xl */}
          <div className="absolute -top-40 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 left-0 w-96 h-96 bg-yellow-600 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
          
          {/* Removed third blob - too much! */}
          
          {/* Moving geometric shapes - NON-ANIMATED */}
          <div className="absolute top-20 right-20 w-40 h-40 border-2 border-yellow-500 opacity-20 rotate-45"></div>
          <div className="absolute bottom-32 left-20 w-32 h-32 border-2 border-yellow-400 opacity-15 rotate-12"></div>
        </div>

        <div className="container-wide relative z-10 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Topline */}
            <div className="mb-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-yellow-500 font-semibold text-sm md:text-base tracking-widest uppercase">
                MOTORRIJLES IN EINDHOVEN
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-white">
              <span className="block">Beheers</span>
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                de Motor
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl font-light">
              Professionele motorrijlessen met 26 jaar ervaring. Leer van instructeur Boyd Smits met persoonlijke begeleiding en flexibele planning.
            </p>

            {/* Features row */}
            <div className="flex flex-wrap gap-6 mb-12 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-yellow-600"></div>
                <span className="text-gray-300">8-22 Uur Beschikbaar</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-yellow-600"></div>
                <span className="text-gray-300">Flexibele Planning</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-yellow-600"></div>
                <span className="text-gray-300">Gratis Proefles</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/signup" 
                className="group relative bg-yellow-500 hover:bg-yellow-600 text-black font-black text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  INSCHRIJVEN
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator - REMOVED BOUNCE (too much animation) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section - MEMOIZED */}
      <StatsSectionComponent />

      {/* Packages Section - MEMOIZED */}
      <PackagesSectionComponent motorAlaCarteItems={motorAlaCarteItems} />

      {/* FAQ Section - MEMOIZED */}
      <FAQSectionComponent />

      {/* CTA Section - MEMOIZED */}
      <CTASectionComponent />
    </div>
  );
};

// Memoized components om re-renders te voorkomen
const StatsSectionComponent = memo(() => (
  <section className="bg-gray-50 py-16">
    <div className="container-wide">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Trophy className="h-12 w-12 text-yellow-500" />
          </div>
          <div className="text-3xl font-bold text-black mb-2">6+</div>
          <div className="text-gray-600">Jaar Instructeur</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-yellow-500" />
          </div>
          <div className="text-3xl font-bold text-black mb-2">26</div>
          <div className="text-gray-600">Jaar Motor Passie</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Star className="h-12 w-12 text-yellow-500" />
          </div>
          <div className="text-3xl font-bold text-black mb-2">100%</div>
          <div className="text-gray-600">Persoonlijke Begeleiding</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Clock className="h-12 w-12 text-yellow-500" />
          </div>
          <div className="text-3xl font-bold text-black mb-2">8-22</div>
          <div className="text-gray-600">Uur Beschikbaar</div>
        </div>
      </div>
    </div>
  </section>
));

const PackagesSectionComponent = memo(({ motorAlaCarteItems }: { motorAlaCarteItems: any[] }) => (
  <section className="section-padding bg-white">
    <div className="container-wide">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Motorrijles <span className="text-yellow-500">Pakketten</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Kies het pakket dat bij jou past. Professionele begeleiding met flexibele planning.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {motorPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-2xl p-8 border-2 transition-all duration-200 ${
              pkg.popular 
                ? 'border-yellow-500 bg-yellow-50 shadow-xl transform scale-105' 
                : 'border-gray-200 bg-white hover:border-yellow-500'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                  MEEST POPULAIR
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-4xl font-bold text-black">€{pkg.price}</span>
                {pkg.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through">
                    €{pkg.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-gray-600">{pkg.description}</p>
            </div>

            <div className="space-y-4 mb-8">
              {pkg.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="/signup"
              className={`w-full font-bold py-3 rounded-lg transition-all duration-200 text-center block ${
                pkg.popular 
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg' 
                  : 'bg-gray-100 hover:bg-yellow-500 text-black'
              }`}
            >
              KIES DIT PAKKET
            </a>
          </div>
        ))}
      </div>

      {/* A la carte section */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-black mb-6 text-center">
          À la Carte Opties
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {motorAlaCarteItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h4 className="font-semibold text-black mb-2">{item.name}</h4>
              <p className="text-2xl font-bold text-yellow-500 mb-2">€{item.price}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

const FAQSectionComponent = memo(() => (
  <section className="section-padding bg-gray-50">
    <div className="container-narrow">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Veelgestelde <span className="text-yellow-500">Vragen</span>
        </h2>
      </div>

      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-black mb-4">
              {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

const CTASectionComponent = memo(() => (
  <section className="section-padding bg-black text-white">
    <div className="container-wide text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Klaar voor je <span className="text-yellow-500">Motorrijles?</span>
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        Start vandaag nog. Flexibel inplannen, professionele begeleiding.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center">
          INSCHRIJVEN
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
        <a href="/contact" className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center">
          CONTACT
        </a>
      </div>
    </div>
  </section>
));

export default Home;