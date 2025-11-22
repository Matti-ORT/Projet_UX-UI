import { Tabs } from 'expo-router';
import { Calendar, House, User } from 'lucide-react-native';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/navigation/HapticTab';
import { useColorScheme } from '@/hooks/use-color-scheme';

/**
 * Layout des Onglets (TabLayout)
 * Gère la barre de navigation inférieure (Bottom Tab Bar).
 */
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeColor = '#F97316'; // Orange du design
  const inactiveColor = '#000000';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        headerShown: false, // Masquer l'en-tête par défaut des onglets
        tabBarButton: HapticTab, // Bouton personnalisé avec retour haptique
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          },
          default: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            elevation: 6,
          },
        }),
      }}>
      {/* Onglet Accueil */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => <House size={28} color={color} />,
        }}
      />
      {/* Onglet Mes RDV */}
      <Tabs.Screen
        name="appointments"
        options={{
          title: 'Mes RDV',
          tabBarIcon: ({ color }) => <Calendar size={28} color={color} />,
        }}
      />
      {/* Onglet Profil */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <User size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
