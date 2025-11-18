import React from 'react';
import { CheckCircle, Car, Users, ArrowRight, Star, Award, Zap } from 'lucide-react';
import { autoPackages, alaCarteItems } from '../data/packages';

const AutoLessons: React.FC = () => {
  const autoAlaCarteItems = alaCarteItems.filter(item => item.type === 'auto' || item.type === 'both');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black overflow-hidden py-24 md:py-32">
        {/* Soft animated blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-32 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-32 right-10 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Geometric accents */}
        <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-yellow-400 rounded-full opacity-15" style={{ animation: 'float 8s ease-in-out infinite' }}></div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl px-4 md:px-0">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full border border-yellow-300">
              <Zap className="h-4 w-4 text-yellow-600" />
              <span className="text-yellow-900 font-semibold text-sm">AUTORIJLES - EINDHOVEN</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-black pr-4">
              <span className="block mb-2">Jouw B-Rijbewijs</span>
              <span className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent pb-2">
                Begint Hier
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Professionele autorijlessen in moderne lesauto's. Leer rijden van ervaren instructeur Boyd Smits met persoonlijke begeleiding naar je rijbewijs.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex items-center space-x-2">
                <span className="w-1 h-4 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-700 font-medium">Moderne Lesauto's</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-4 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-700 font-medium">Persoonlijke Begeleiding</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-4 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-700 font-medium">Flexibele Planning</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="/signup" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-black px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center"
              >
                INSCHRIJVEN
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-50 font-bold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                MEER INFO
              </a>
            </div>
          </div>
        </div>

        {/* Animation styles */}
        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(20px, -30px) scale(1.05); }
            66% { transform: translate(-15px, 15px) scale(0.95); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(3deg); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Waarom kiezen voor <span className="text-yellow-500">Motop Auto?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-gray-50 rounded-xl border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
              <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Car className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">🚗 Moderne Lesauto's</h3>
              <p className="text-gray-700 leading-relaxed">
                Leer rijden in goed onderhouden auto's met de nieuwste veiligheidssystemen en comfort.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-gray-50 rounded-xl border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
              <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">👤 Persoonlijke Aanpak</h3>
              <p className="text-gray-700 leading-relaxed">
                Elke leerling is uniek. We passen ons lesplan aan jouw tempo en leerstijl aan.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-gray-50 rounded-xl border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
              <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">⭐ Hoge Slaagkans</h3>
              <p className="text-gray-700 leading-relaxed">
                Door onze grondige voorbereiding hebben onze leerlingen een hoge slaagkans op het examen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Auto <span className="text-yellow-500">Pakketten</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kies het pakket dat bij jouw situatie past. Alle pakketten bevatten theorie- en praktijkvoorbereiding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {autoPackages.map((pkg) => (
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
                  SELECTEER PAKKET
                </a>
              </div>
            ))}
          </div>

          {/* A la carte section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">
              À la Carte Opties
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {autoAlaCarteItems.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-yellow-500 transition-colors">
                  <h4 className="font-semibold text-black mb-2">{item.name}</h4>
                  <p className="text-2xl font-bold text-yellow-500 mb-2">€{item.price}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Van Beginner tot <span className="text-yellow-500">Rijbewijs</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-full w-14 h-14 flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Kennismaking & Proefles</h3>
                <p className="text-gray-700 leading-relaxed">
                  We beginnen met een proefles om je rijvaardigheid in te schatten en 
                  een persoonlijk leerplan samen te stellen.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-full w-14 h-14 flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Theorie Voorbereiding</h3>
                <p className="text-gray-700 leading-relaxed">
                  Grondige voorbereiding op het theorieëxamen met praktijkgerichte uitleg 
                  en modern oefenmateriaal.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-full w-14 h-14 flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Praktijklessen</h3>
                <p className="text-gray-700 leading-relaxed">
                  Intensieve praktijklessen in moderne lesauto's op verschillende locaties 
                  in Eindhoven voor maximale ervaring.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-full w-14 h-14 flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Examens & Slagen 🎉</h3>
                <p className="text-gray-700 leading-relaxed">
                  Begeleiding tijdens theorie- en praktijkexamen tot je je B-rijbewijs hebt behaald!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Voordelen van <span className="text-yellow-500">Motop Auto</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-1">✓ Flexibele Planning</h3>
                  <p className="text-gray-700">Lessen op tijden die jou uitkomen, ook 's avonds en weekenden.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-1">✓ Moderne Lesauto's</h3>
                  <p className="text-gray-700">Goed onderhouden auto's met veiligheidssystemen en comfort.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-1">✓ Ervaren Instructeur</h3>
                  <p className="text-gray-700">Professionele begeleiding door Boyd Smits met jarenlange ervaring.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-1">✓ Persoonlijke Aanpak</h3>
                  <p className="text-gray-700">Lessen aangepast aan jouw tempo voor optimaal resultaat.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-1">✓ Transparante Prijzen</h3>
                  <p className="text-gray-700">Duidelijke pakketten zonder verborgen kosten.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-1">✓ Lokale Kennis</h3>
                  <p className="text-gray-700">Grondige kennis van Eindhoven voor optimale voorbereiding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Start met je <span className="text-yellow-500">Autorijlessen</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Begin vandaag nog met professionele autorijlessen bij Motop in Eindhoven. 
            Moderne lesauto's, flexibele planning en persoonlijke begeleiding gegarandeerd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-black font-black text-lg px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center">
              INSCHRIJVEN
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="/contact" className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold text-lg px-8 py-4 rounded-lg transition-all inline-flex items-center justify-center">
              PROEFLES BOEKEN
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoLessons;