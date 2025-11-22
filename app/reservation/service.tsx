import { Header } from '@/components/common/Header';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ServiceSelectionScreen() {
  const router = useRouter();

  const handleServiceSelect = (service: string) => {
    // On pourrait passer le service en paramètre
    router.push('/reservation/slot');
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
          <TouchableOpacity style={styles.serviceItem} onPress={() => handleServiceSelect('Coupe homme classique')}>
            <Text style={styles.serviceText}>Coupe homme classique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem} onPress={() => handleServiceSelect('Dégrader Americain')}>
            <Text style={styles.serviceText}>Dégrader Americain</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem} onPress={() => handleServiceSelect('Coupe Etudiante')}>
            <Text style={styles.serviceText}>Coupe Etudiante</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.categoryTitle}>Femme</Text>
        <View style={styles.serviceGroup}>
          <TouchableOpacity style={styles.serviceItem} onPress={() => handleServiceSelect('Coupe femme')}>
            <Text style={styles.serviceText}>Coupe femme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem} onPress={() => handleServiceSelect('Brushing')}>
            <Text style={styles.serviceText}>Brushing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem} onPress={() => handleServiceSelect('Couleur')}>
            <Text style={styles.serviceText}>Couleur</Text>
          </TouchableOpacity>
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
    backgroundColor: '#E5E7EB', // Gris clair/bleuté comme sur l'image
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  serviceItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  serviceText: {
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    color: '#000',
  },
});
