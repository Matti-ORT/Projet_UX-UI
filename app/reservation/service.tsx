import { Header } from '@/components/common/Header';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Les services sont définis comme des objets
const manServices = [
  { name: 'Coupe homme classique', price: 20 },
  { name: 'Dégrader + barbe', price: 25 },
  { name: 'Coupe Etudiante', price: 15 },
];

const womanServices = [
  { name: 'Coupe femme', price: 35 },
  { name: 'Brushing', price: 25 },
  { name: 'Couleur', price: 45 },
];

export default function ServiceSelectionScreen() {
  const router = useRouter();

  const handleServiceSelect = (service: { name: string; price: number }) => {
    // Passe le nom et le prix en query string vers l'écran suivant.
    const path = `/reservation/slot?service=${encodeURIComponent(
      service.name
    )}&price=${encodeURIComponent(String(service.price))}`;
    router.push(path as any);
  };

  return (
    <View style={styles.root}>
      <Header title="Choix Prestation" />
      
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ChevronLeft size={24} color="#000" />
        <Text style={styles.backText}>Retour</Text>
      </TouchableOpacity>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Choix de la prestation</Text>

        <Text style={styles.categoryTitle}>Homme</Text>
        <View style={styles.serviceGroup}>
          {manServices.map((s) => (
            <TouchableOpacity key={s.name} style={styles.serviceItem} onPress={() => handleServiceSelect(s)}>
              <Text style={styles.serviceText}>{s.name}</Text>
              <Text style={styles.priceText}>€{s.price}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.categoryTitle}>Femme</Text>
        <View style={styles.serviceGroup}>
          {womanServices.map((s) => (
            <TouchableOpacity key={s.name} style={styles.serviceItem} onPress={() => handleServiceSelect(s)}>
              <Text style={styles.serviceText}>{s.name}</Text>
              <Text style={styles.priceText}>€{s.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  backText: {
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    marginLeft: 4,
  },
  sectionTitle: {
    fontFamily: 'Roboto Condensed',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryTitle: {
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  serviceGroup: {
    backgroundColor: '#E5E7EB', 
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  serviceItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '600',
  },
  serviceText: {
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    color: '#000',
  },
});
