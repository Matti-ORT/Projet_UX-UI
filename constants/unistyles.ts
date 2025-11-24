// Configuration Unistyles v3: thèmes et tokens utilisés par Unistyles wrapper
// lightTheme: couleurs, espacements, rayons et police par défaut pour light mode
export const lightTheme = {
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#F97316',
    muted: '#F3F4F6',
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24 },
  radii: { sm: 5, md: 12, lg: 20 },
  fonts: { regular: 'Roboto Condensed' },
} as const;

// darkTheme: les mêmes tokens pour le mode sombre
export const darkTheme = {
  colors: {
    background: '#121212',
    text: '#FFFFFF',
    primary: '#F97316',
    muted: '#1F1F1F',
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24 },
  radii: { sm: 5, md: 12, lg: 20 },
  fonts: { regular: 'Roboto Condensed' },
} as const;

// Breakpoints si besoin d'un comportement layout différent (phone/tablet)
export const breakpoints = {
  phone: 0,
  tablet: 768,
} as const;

// Typage utile pour réutiliser le thème dans des hooks/components TypeScript
export type AppTheme = typeof lightTheme;
