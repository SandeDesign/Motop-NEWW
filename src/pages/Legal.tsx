import React from 'react';
import { Shield, FileText, AlertCircle } from 'lucide-react';
import { businessInfo } from '../data/content';

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold text-black mb-6">
            Juridische <span className="text-yellow-500">Informatie</span>
          </h1>
          <p className="text-xl text-gray-600">
            Transparantie en duidelijkheid over onze voorwaarden en privacybeleid
          </p>
        </div>
      </section>

      <div className="container-narrow py-16">
        {/* Privacy Policy */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-black">Privacybeleid</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-black mb-4">Gegevensverzameling</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Motop verzamelt alleen die persoonlijke gegevens die noodzakelijk zijn voor het verlenen 
              van rijlessen. Dit omvat je naam, contactgegevens, geboortedatum en rijervaring.
            </p>

            <h3 className="text-xl font-semibold text-black mb-4">Gebruik van Gegevens</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We gebruiken je gegevens uitsluitend voor:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Het plannen en uitvoeren van rijlessen</li>
              <li>Communicatie over je leerproces</li>
              <li>Administratieve doeleinden</li>
              <li>Wettelijke verplichtingen (indien van toepassing)</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mb-4">Gegevensbescherming</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Je gegevens worden veilig opgeslagen en nooit gedeeld met derden zonder jouw toestemming, 
              behalve wanneer dit wettelijk verplicht is. Je hebt altijd het recht om inzage, correctie 
              of verwijdering van je gegevens te vragen.
            </p>

            <h3 className="text-xl font-semibold text-black mb-4">Contact</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Voor vragen over je privacy kun je contact opnemen via {businessInfo.contact.email} 
              of {businessInfo.contact.phone}.
            </p>
          </div>
        </section>

        {/* Terms and Conditions */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FileText className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-black">Algemene Voorwaarden</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-black mb-4">Dienstverlening</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Motop biedt professionele rijlessen voor motor (AVB/AVD) en auto (B-rijbewijs) 
              in Eindhoven en omgeving. Alle lessen worden verzorgd door gecertificeerde instructeurs.
            </p>

            <h3 className="text-xl font-semibold text-black mb-4">Prijzen en Betalingen</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Alle prijzen zijn inclusief BTW waar van toepassing. Betaling kan contant of via 
              bankoverschrijving. Pakketten dienen vooraf te worden betaald.
            </p>

            <h3 className="text-xl font-semibold text-black mb-4">Annulering en Wijziging</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Lessen kunnen tot 24 uur van tevoren kosteloos worden geannuleerd of verzet</li>
              <li>Bij annulering binnen 24 uur wordt de les in rekening gebracht</li>
              <li>Bij ziekte kan een les kosteloos worden verzet (met doktersverklaring indien nodig)</li>
              <li>Weersomstandigheden kunnen reden zijn om lessen te verzetten in overleg</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mb-4">Aansprakelijkheid</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Motop is verzekerd voor wettelijke aansprakelijkheid. Deelname aan rijlessen is 
              op eigen risico. Schade aan lesvoertuigen door grove nalatigheid komt voor rekening 
              van de leerling.
            </p>

            <h3 className="text-xl font-semibold text-black mb-4">Geschillen</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Op deze overeenkomst is Nederlands recht van toepassing. Geschillen worden voorgelegd 
              aan de bevoegde rechter in Eindhoven.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section>
          <div className="flex items-center mb-8">
            <AlertCircle className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-black">Disclaimer</h2>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                De informatie op deze website is met zorg samengesteld, maar Motop kan niet garanderen 
                dat alle informatie juist, volledig of actueel is. Prijzen en voorwaarden kunnen 
                zonder voorafgaande kennisgeving worden gewijzigd.
              </p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Het slagen voor rijexamens kan niet worden gegarandeerd, ongeacht het gekozen pakket 
                of het aantal lessen. Success hangt af van individuele factoren zoals leervermogen, 
                oefening en inzet.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Voor de meest actuele informatie over prijzen, beschikbaarheid en voorwaarden, 
                neem altijd direct contact op met Motop.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Vragen?</h3>
          <p className="text-gray-700 mb-6">
            Heb je vragen over onze voorwaarden of privacybeleid? 
            Neem gerust contact met ons op.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              CONTACT OPNEMEN
            </a>
            <a href="tel:[phone]" className="btn-secondary">
              DIRECT BELLEN
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Legal;