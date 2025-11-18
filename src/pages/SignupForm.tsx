import React, { useState } from 'react';
import { CheckCircle, User, Mail, Phone, Car, Bike, ArrowRight, Zap } from 'lucide-react';
import { motorPackages, autoPackages } from '../data/packages';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  licenseType: 'motor' | 'auto' | '';
  selectedPackage: string;
  experience: string;
  preferredStartDate: string;
  preferredTimes: string[];
  message: string;
  termsAccepted: boolean;
  marketingConsent: boolean;
}

const SignupForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    licenseType: '',
    selectedPackage: '',
    experience: '',
    preferredStartDate: '',
    preferredTimes: [],
    message: '',
    termsAccepted: false,
    marketingConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'preferredTimes') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        preferredTimes: checked
          ? [...prev.preferredTimes, value]
          : prev.preferredTimes.filter(time => time !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Voornaam is verplicht';
      if (!formData.lastName.trim()) newErrors.lastName = 'Achternaam is verplicht';
      if (!formData.email.trim()) {
        newErrors.email = 'E-mail is verplicht';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Ongeldig e-mailadres';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Telefoonnummer is verplicht';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Geboortedatum is verplicht';
    }

    if (step === 2) {
      if (!formData.licenseType) newErrors.licenseType = 'Selecteer rijbewijs type';
      if (!formData.selectedPackage) newErrors.selectedPackage = 'Selecteer een pakket';
    }

    if (step === 4) {
      if (!formData.termsAccepted) newErrors.termsAccepted = 'Je moet akkoord gaan met de voorwaarden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const availablePackages = formData.licenseType === 'motor' ? motorPackages : 
                          formData.licenseType === 'auto' ? autoPackages : [];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-2xl p-12 border border-yellow-200">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-20" style={{ width: '100px', height: '100px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <CheckCircle className="h-20 w-20 text-yellow-500 mx-auto mb-8 relative z-10" />
          </div>
          <h1 className="text-4xl font-black text-black mb-4">JA! Je bent ingeschreven!</h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Proficiat <span className="font-bold text-yellow-600">{formData.firstName}</span>! 🎉 Je bent officieel op weg naar je motorrijbewijs.
          </p>
          <div className="bg-gradient-to-br from-yellow-50 to-gray-50 rounded-xl p-8 mb-8 border border-yellow-200">
            <h3 className="font-bold text-black mb-4 text-lg">Volgende stappen:</h3>
            <div className="text-left space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span className="text-gray-700"><strong>Binnen 24 uur</strong> nemen we contact met je op</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span className="text-gray-700">We bespreken je <strong>planning en doelen</strong></span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span className="text-gray-700">Je eerste les is <strong>ingepland</strong> ✌️</span>
              </div>
            </div>
          </div>
          <a href="/" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
            TERUG NAAR HOME
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-yellow-100">
        <div className="container-wide py-8">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
              <Zap className="h-4 w-4 text-yellow-600" />
              <span className="text-yellow-900 font-semibold text-sm">STAP IN DE WERELD VAN MOTORRIJDEN</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-black mb-2">
              Jouw Weg naar het <span className="text-yellow-500">Motorrijbewijs</span>
            </h1>
            <p className="text-gray-600 text-lg">Voltooi deze vorm en start vandaag nog!</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-wide py-6">
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1 md:flex-initial">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-black transition-all ${
                  currentStep >= step 
                    ? 'bg-yellow-500 text-black shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`hidden md:block flex-1 h-1 mx-2 rounded-full ${
                    currentStep > step ? 'bg-yellow-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs font-semibold text-gray-600 mt-4 px-2">
            <span>Persoonlijk</span>
            <span>Rijlessen</span>
            <span>Planning</span>
            <span>Bevestigen</span>
          </div>
        </div>
      </div>

      <div className="container-narrow py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div>
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-black mb-3">Wie ben jij?</h2>
                  <p className="text-gray-600 text-lg">Laten we beginnen met de basis.</p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Voornaam *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Jouw voornaam"
                      />
                      {errors.firstName && <p className="mt-1 text-sm text-red-600 font-medium">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Achternaam *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Jouw achternaam"
                      />
                      {errors.lastName && <p className="mt-1 text-sm text-red-600 font-medium">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        E-mailadres *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="jouw@email.nl"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600 font-medium">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Telefoonnummer *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="06-12345678"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600 font-medium">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Geboortedatum *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all ${
                        errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600 font-medium">{errors.dateOfBirth}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: License Type & Package */}
            {currentStep === 2 && (
              <div>
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-black mb-3">Welke Rijlessen?</h2>
                  <p className="text-gray-600 text-lg">Kies waar je hart naar uit gaat!</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-4">
                      Type Rijbewijs *
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="licenseType"
                          value="motor"
                          checked={formData.licenseType === 'motor'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`p-6 border-2 rounded-xl transition-all transform hover:scale-105 ${
                          formData.licenseType === 'motor' 
                            ? 'border-yellow-500 bg-yellow-50 shadow-lg' 
                            : 'border-gray-300 hover:border-yellow-400'
                        }`}>
                          <div className="flex items-center space-x-4">
                            <Bike className={`h-8 w-8 ${formData.licenseType === 'motor' ? 'text-yellow-500' : 'text-gray-400'}`} />
                            <div>
                              <h3 className="font-bold text-black text-lg">🏍️ Motorrijbewijs</h3>
                              <p className="text-sm text-gray-600">AVB & AVD training</p>
                            </div>
                          </div>
                        </div>
                      </label>

                      <label className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="licenseType"
                          value="auto"
                          checked={formData.licenseType === 'auto'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`p-6 border-2 rounded-xl transition-all transform hover:scale-105 ${
                          formData.licenseType === 'auto' 
                            ? 'border-yellow-500 bg-yellow-50 shadow-lg' 
                            : 'border-gray-300 hover:border-yellow-400'
                        }`}>
                          <div className="flex items-center space-x-4">
                            <Car className={`h-8 w-8 ${formData.licenseType === 'auto' ? 'text-yellow-500' : 'text-gray-400'}`} />
                            <div>
                              <h3 className="font-bold text-black text-lg">🚗 Autorijbewijs</h3>
                              <p className="text-sm text-gray-600">B-rijbewijs training</p>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    {errors.licenseType && <p className="mt-2 text-sm text-red-600 font-medium">{errors.licenseType}</p>}
                  </div>

                  {formData.licenseType && (
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-4">
                        Kies je Pakket *
                      </label>
                      <div className="space-y-4">
                        {availablePackages.map((pkg) => (
                          <label key={pkg.id} className="relative cursor-pointer">
                            <input
                              type="radio"
                              name="selectedPackage"
                              value={pkg.id}
                              checked={formData.selectedPackage === pkg.id}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className={`p-6 border-2 rounded-xl transition-all ${
                              formData.selectedPackage === pkg.id 
                                ? 'border-yellow-500 bg-yellow-50 shadow-lg' 
                                : 'border-gray-300 hover:border-yellow-400'
                            }`}>
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-bold text-black mb-1 text-lg">{pkg.name}</h3>
                                  <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
                                  <p className="text-xs text-gray-500">
                                    ⏱️ {pkg.lessons} lessen • 📋 {pkg.exams.join(' + ')}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-black text-yellow-600">€{pkg.price}</div>
                                  {pkg.originalPrice && (
                                    <div className="text-sm text-gray-400 line-through">€{pkg.originalPrice}</div>
                                  )}
                                  {pkg.popular && (
                                    <span className="inline-block px-3 py-1 text-xs bg-yellow-500 text-black rounded-full mt-2 font-bold">
                                      ⭐ POPULAIR
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.selectedPackage && <p className="mt-2 text-sm text-red-600 font-medium">{errors.selectedPackage}</p>}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Hoeveel ervaring heb je al?
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                    >
                      <option value="">Selecteer je ervaring</option>
                      <option value="none">Geen ervaring - totale beginner</option>
                      <option value="basic">Beetje ervaring - ik heb gereden</option>
                      <option value="some">Enige ervaring - redelijk vaardig</option>
                      <option value="experienced">Ervaren - ik ben een natural</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div>
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-black mb-3">Jouw Planning</h2>
                  <p className="text-gray-600 text-lg">Wanneer ben je klaar om te starten?</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Gewenste Startdatum
                    </label>
                    <input
                      type="date"
                      name="preferredStartDate"
                      value={formData.preferredStartDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-4">
                      Voorkeur Tijden (selecteer 1 of meer)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        'Ochtend (08:00-12:00)',
                        'Middag (12:00-17:00)',
                        'Avond (17:00-22:00)',
                        'Doordeweeks',
                        'Weekend',
                        'Flexibel'
                      ].map((time) => (
                        <label key={time} className="flex items-center space-x-3 p-3 border-2 border-gray-300 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition-all cursor-pointer">
                          <input
                            type="checkbox"
                            name="preferredTimes"
                            value={time}
                            checked={formData.preferredTimes.includes(time)}
                            onChange={handleInputChange}
                            className="h-5 w-5 text-yellow-500 border-gray-300 rounded cursor-pointer"
                          />
                          <span className="text-sm text-gray-700 font-medium">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Heb je nog vragen of wensen? (Optioneel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                      placeholder="Bijvoorbeeld: ik heb al een motor, ik ben links- of rechtshandig, etc."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div>
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-black mb-3">Klaar om te Starten?</h2>
                  <p className="text-gray-600 text-lg">Controleer je gegevens en bevestig!</p>
                </div>

                <div className="space-y-8">
                  {/* Summary */}
                  <div className="bg-gradient-to-br from-yellow-50 to-gray-50 rounded-xl p-8 border-2 border-yellow-200">
                    <h3 className="font-bold text-black mb-6 text-lg flex items-center">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                      Jouw Inschrijving
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between items-center pb-3 border-b border-yellow-200">
                        <span className="text-gray-600 font-medium">Naam:</span>
                        <span className="text-black font-bold">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-yellow-200">
                        <span className="text-gray-600 font-medium">Type:</span>
                        <span className="text-black font-bold">{formData.licenseType === 'motor' ? '🏍️ Motorrijbewijs' : '🚗 Autorijbewijs'}</span>
                      </div>
                      {formData.selectedPackage && (
                        <div className="flex justify-between items-center pb-3 border-b border-yellow-200">
                          <span className="text-gray-600 font-medium">Pakket:</span>
                          <span className="text-black font-bold">
                            {availablePackages.find(p => p.id === formData.selectedPackage)?.name}
                          </span>
                        </div>
                      )}
                      {formData.preferredStartDate && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium">Startdatum:</span>
                          <span className="text-black font-bold">
                            {new Date(formData.preferredStartDate).toLocaleDateString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Terms and conditions */}
                  <div className="space-y-4 p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-yellow-500 border-gray-300 rounded mt-1 cursor-pointer"
                      />
                      <label className="text-sm text-gray-700 cursor-pointer">
                        Ik ga akkoord met de <a href="/legal" className="text-yellow-600 hover:text-yellow-700 font-bold">algemene voorwaarden</a> en het <a href="/legal" className="text-yellow-600 hover:text-yellow-700 font-bold">privacybeleid</a> van Motop. *
                      </label>
                    </div>
                    {errors.termsAccepted && <p className="text-sm text-red-600 font-bold">{errors.termsAccepted}</p>}

                    <div className="flex items-start space-x-3 pt-2">
                      <input
                        type="checkbox"
                        name="marketingConsent"
                        checked={formData.marketingConsent}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-yellow-500 border-gray-300 rounded mt-1 cursor-pointer"
                      />
                      <label className="text-sm text-gray-700 cursor-pointer">
                        Ik wil graag tips, updates en nieuws ontvangen van Motop (optioneel)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-10 border-t-2 border-gray-200 mt-10">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-all"
                >
                  ← Vorige
                </button>
              )}
              
              <div className="flex-1"></div>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center"
                >
                  Volgende
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-black py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center text-lg"
                >
                  🚀 IK WIJK INSCHRIJVEN!
                  <Zap className="ml-2 h-5 w-5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;