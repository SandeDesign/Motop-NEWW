// Typography system for Motop
export const typography = {
  // Font families
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Inter', 'system-ui', 'sans-serif']
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem'
  },
  
  // Line heights
  lineHeight: {
    body: '1.5',
    heading: '1.2'
  },
  
  // Font weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
  }
} as const;