import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';

// Point d'ancrage pour la navigation (utile pour le deep linking)
export const unstable_settings = {
  anchor: '(tabs)',
};

/**
 * Layout Racine (RootLayout)
 * C'est le point d'entrée principal de l'application.
 * Il gère :
 * 1. Le chargement des polices (Fonts)
 * 2. Le thème (Clair/Sombre)
 * 3. La navigation principale (Stack)
 */
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Chargement des polices personnalisées au démarrage
  useEffect(() => {
    Font.loadAsync({
      'Roboto Condensed': require('@/assets/fonts/RobotoCondensed-Regular.ttf'),
    }).then(() => setFontsLoaded(true));
  }, []);

  // On n'affiche rien tant que les polices ne sont pas chargées
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Groupe d'onglets principal */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        {/* Groupe Réservation: masquer l'en-tête pour toutes les routes /reservation/* */}
        <Stack.Screen name="reservation" options={{ headerShown: false }} />

        {/* Groupe d'authentification (Login/Signup) - Sans en-tête */}
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        
        {/* Écran Modal global */}
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
