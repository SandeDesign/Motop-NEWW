import React from 'react';
import { CheckCircle, Award, Users, Heart, ArrowRight, Star } from 'lucide-react';
import { motorPackages, alaCarteItems } from '../data/packages';
import { instructorBio, testimonials, faqData } from '../data/content';

const MotorLessons: React.FC = () => {
  const motorAlaCarteItems = alaCarteItems.filter(item => item.type === 'motor' || item.type === 'both');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black overflow-hidden py-24 md:py-32">
        {/* Soft animated blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-32 right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-32 left-10 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" style={{ animationDelay: '4s' }}></div>
          
          {/* Accent lines */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-40"></div>
          <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-30"></div>
        </div>

        {/* Geometric accents */}
        <div className="absolute top-10 left-10 w-16 h-16 border-2 border-yellow-400 rounded-lg opacity-20 rotate-45" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 border-2 border-yellow-300 rounded-full opacity-15" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}></div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full border border-yellow-300">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-900 font-semibold text-sm">MOTORRIJLES - EINDHOVEN</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-black">
              <span className="block mb-2">Professionele</span>
              <span className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Motorrijlessen
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl font-normal">
              Boyd Smits begeleidt je met 26 jaar motorpassie naar je rijbewijs. Persoonlijk, flexibel en altijd op jouw tempo.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex items-center space-x-2">
                <span className="w-1 h-4 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-700 font-medium">AVB & AVD Gecertificeerd</span>
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
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center"
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

      {/* About Motop & Boyd */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Over <span className="text-yellow-500">Motop</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Motop staat voor Duidelijk en modern rijonderwijs. Wij geloven dat elke leerling 
                uniek is en een persoonlijke aanpak verdient. Bij ons staat kwaliteit voorop, niet kwantiteit.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Onze missie is om elke leerling met vertrouwen en plezier naar het motorrijbewijs 
                te begeleiden, waarbij veiligheid altijd prioriteit nummer één is.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">AVB & AVD</div>
                  <div className="text-gray-600 text-sm">Gecertificeerd</div>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Users className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">Flexibel</div>
                  <div className="text-gray-600 text-sm">Planning</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-gray-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-black mb-6">
                Instructeur <span className="text-yellow-500">Boyd Smits</span>
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {instructorBio.description}
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">
                    {instructorBio.experience.instructor}
                  </div>
                  <div className="text-xs text-gray-600">Jaar Instructeur</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">
                    {instructorBio.experience.rider}
                  </div>
                  <div className="text-xs text-gray-600">Jaar Rijder</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">
                    {instructorBio.experience.enthusiast}
                  </div>
                  <div className="text-xs text-gray-600">Jaar Passie</div>
                </div>
              </div>

              <blockquote className="text-gray-700 italic text-center border-l-4 border-yellow-500 pl-4">
                "{instructorBio.philosophy}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Kies jouw <span className="text-yellow-500">Pakket</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Alle pakketten bevatten AVB en AVD training door ervaren instructeur Boyd Smits.
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
              {motorAlaCarteItems.map((item) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Hoe werkt het <span className="text-yellow-500">Proces?</span>
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
                  We beginnen met een proefles om je huidige niveau in te schatten en 
                  een persoonlijk leerplan op te stellen.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-full w-14 h-14 flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">AVB Theorie Training</h3>
                <p className="text-gray-700 leading-relaxed">
                  Grondige voorbereiding op het theorieëxamen met persoonlijke begeleiding 
                  en praktijkgerichte theorie.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-full w-14 h-14 flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">AVD Praktijk Training</h3>
                <p className="text-gray-700 leading-relaxed">
                  Intensieve praktijklessen op verschillende locaties voor maximale voorbereiding 
                  op het praktijkexamen.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-full w-14 h-14 flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Examens & Slagen</h3>
                <p className="text-gray-700 leading-relaxed">
                  Begeleiding tijdens examens en doorlopende ondersteuning tot je je motorrijbewijs hebt behaald.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Wat zeggen onze <span className="text-yellow-500">Leerlingen?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 border border-gray-200 hover:border-yellow-500 transition-colors">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.course}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Veelgestelde <span className="text-yellow-500">Vragen</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
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

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Klaar voor je <span className="text-yellow-500">Motorrijbewijs?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Begin vandaag nog met professionele motorrijlessen bij Boyd Smits. 
            Flexibele planning en persoonlijke begeleiding gegarandeerd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center">
              INSCHRIJVEN
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="/contact" className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center">
              CONTACT OPNEMEN
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotorLessons;