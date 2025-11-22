// Configuration Unistyles v3
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

export const breakpoints = {
  phone: 0,
  tablet: 768,
} as const;

// Typage pour TypeScript (si besoin)
export type AppTheme = typeof lightTheme;
