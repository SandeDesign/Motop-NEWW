// Reusable component classes for Motop
export const components = {
  // Buttons
  button: {
    base: 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
    primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-gold text-black hover:bg-yellow-500 focus:ring-gold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white focus:ring-black'
  },
  
  // Cards
  card: {
    base: 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300',
    pricing: 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-gold',
    popular: 'border-2 border-gold relative'
  },
  
  // Containers
  container: {
    base: 'container mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
    wide: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
  },
  
  // Sections
  section: {
    base: 'py-16 lg:py-24',
    hero: 'py-20 lg:py-32'
  },
  
  // Text
  heading: {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight',
    h2: 'text-3xl md:text-4xl font-bold text-black leading-tight',
    h3: 'text-2xl md:text-3xl font-bold text-black leading-tight',
    h4: 'text-xl md:text-2xl font-semibold text-black'
  },
  
  // Forms
  input: {
    base: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200',
    error: 'border-red-500 focus:ring-red-500'
  }
} as const;