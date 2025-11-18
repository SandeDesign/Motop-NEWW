import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/content';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is verplicht';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ongeldig e-mailadres';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bericht is verplicht';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
        <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-2xl p-10 border border-yellow-200">
          <div className="mb-6 relative inline-block">
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-20" style={{ width: '80px', height: '80px' }}></div>
            <CheckCircle className="h-16 w-16 text-yellow-500 relative z-10" />
          </div>
          <h2 className="text-3xl font-black text-black mb-3">Bericht Ontvangen! ✓</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Bedankt <span className="font-bold">{formData.name}</span>! We nemen zo snel mogelijk contact met je op.
          </p>
          <div className="bg-yellow-50 rounded-lg p-4 mb-6 border border-yellow-200">
            <p className="text-sm text-gray-700">
              <strong>✓ We antwoorden binnen 24 uur</strong> op je e-mailadres of telefoonnummer.
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center"
          >
            TERUG
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black overflow-hidden py-24 md:py-32">
        {/* Soft animated blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-32 right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-32 left-10 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full border border-yellow-300">
              <MessageCircle className="h-4 w-4 text-yellow-600" />
              <span className="text-yellow-900 font-semibold text-sm">CONTACT OPNEMEN</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-black">
              Vragen?<br/>
              <span className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                We Helpen Graag
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Heb je vragen over motorrijlessen, prijzen of hoe alles werkt? Stuur ons een bericht of bel direct!
            </p>
          </div>
        </div>

        {/* Animation styles */}
        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(20px, -30px) scale(1.05); }
            66% { transform: translate(-15px, 15px) scale(0.95); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
        `}</style>
      </section>

      <div className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-black text-black mb-2">
                Stuur ons een <span className="text-yellow-500">Bericht</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">We lezen alles goed door en reageren snel!</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Volledige Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Jouw volledige naam"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 font-medium">{errors.name}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="jouw@email.nl"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                      placeholder="06-12345678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Waarover gaat je vraag?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                  >
                    <option value="">Selecteer een onderwerp</option>
                    <option value="motor">🏍️ Motorrijlessen</option>
                    <option value="auto">🚗 Autorijlessen</option>
                    <option value="proefles">✨ Proefles</option>
                    <option value="prijzen">💰 Prijzen & Pakketten</option>
                    <option value="planning">📅 Planning & Beschikbaarheid</option>
                    <option value="overig">❓ Overig</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Je Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Vertel ons alles wat je wilt weten..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 font-medium">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-black w-full justify-center py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  VERSTUUR BERICHT
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-black text-black mb-2">
                Direct <span className="text-yellow-500">Contact</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">Of bel ons rechtstreeks!</p>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-yellow-50 to-gray-50 rounded-xl p-6 border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1 text-lg">Telefoon</h4>
                      <p className="text-black font-semibold">{businessInfo.contact.phone}</p>
                      <p className="text-sm text-gray-600 mt-1">Ma-Za: 08:00-22:00</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-gray-50 rounded-xl p-6 border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1 text-lg">E-mail</h4>
                      <p className="text-black font-semibold">{businessInfo.contact.email}</p>
                      <p className="text-sm text-gray-600 mt-1">Antwoord binnen 24 uur</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-gray-50 rounded-xl p-6 border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1 text-lg">Locatie</h4>
                      <p className="text-black font-semibold">
                        {businessInfo.location.city}, {businessInfo.location.region}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">Flexibele opstaplocaties</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-gray-50 rounded-xl p-6 border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1 text-lg">Openingstijden</h4>
                      <p className="text-black font-semibold">{businessInfo.hours.weekdays}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white rounded-xl p-8 border-2 border-yellow-500">
                <h4 className="font-black text-lg mb-2">Wil je meteen starten? 🚀</h4>
                <p className="text-gray-300 mb-4">
                  Skip de contactform en schrijf je direct in! Start vandaag nog met je motorrijlessen.
                </p>
                <a href="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-black font-black px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center">
                  DIRECT INSCHRIJVEN
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 flex items-center justify-center border-2 border-gray-300">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2 text-yellow-500" />
                  <p className="font-bold text-black">Eindhoven & Omgeving</p>
                  <p className="text-sm">Flexibele rijtijden op jouw moment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-black mb-6">
            Klaar om te <span className="text-yellow-500">Starten?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Geen vragen meer? Perfect! Schrijf je vandaag nog in en begin met je motorrijlessen.
          </p>
          <a href="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-black font-black text-lg px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center">
            INSCHRIJVEN
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;