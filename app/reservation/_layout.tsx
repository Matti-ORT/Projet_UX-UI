// Layout des écrans de réservation: regroupe service/slot/summary et masque l'en-tête natif
import { Stack } from 'expo-router';
import React from 'react';

export default function ReservationLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="service" />
      <Stack.Screen name="slot" />
      <Stack.Screen name="summary" />
    </Stack>
  );
}
