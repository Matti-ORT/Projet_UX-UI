import { MapPin, Scissors, Search } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from '../common/Header';

import type { StyleProp, ViewStyle } from 'react-native';

export interface HomeContentProps {
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

import { useRouter } from 'expo-router';

export function HomeContent(props: HomeContentProps) {
  const router = useRouter();

  const handleReserve = () => {
    router.push('/reservation/service');
  };

  return (
    <View testID={props.testID ?? 'HomeContentRoot'} style={[styles.root, props.style]}>
      <Header title="Bonjour Karim Beubar" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Cherchez un Salon qui vous plait</Text>
        
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Rechercher..."
            placeholderTextColor="#9CA3AF"
          />
          <Search size={24} color="#F97316" />
        </View>

        <Text style={styles.sectionTitle}>Selectionnez un salon à proximité</Text>

        {/* Carte Salon */}
        <View style={styles.card}>
          <View style={styles.cardImagePlaceholder} />
          
          <View style={styles.cardContent}>
            <View style={styles.scissorsRow}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Scissors key={i} size={20} color="#F97316" />
              ))}
            </View>
            
            <Text style={styles.nomDuSalon}>Nom du salon</Text>
            <View style={styles.addressRow}>
              <MapPin size={16} color="#6B7280" />
              <Text style={styles.adresse}>Adresse du salon, Ville</Text>
            </View>

            <TouchableOpacity style={styles.reserveButton} onPress={handleReserve}>
              <Text style={styles.reserveText}>Réservez</Text>
            </TouchableOpacity>
          </View>
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
    paddingBottom: 100, // Pour la tab bar
  },
  sectionTitle: {
    color: '#000000',
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 20,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 12,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    color: '#000',
  },
  card: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  cardImagePlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#D1D5DB', // Gris placeholder
  },
  cardContent: {
    padding: 16,
  },
  scissorsRow: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 8,
  },
  nomDuSalon: {
    color: '#000000',
    fontFamily: 'Roboto Condensed',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 16,
  },
  adresse: {
    color: '#6B7280',
    fontFamily: 'Roboto Condensed',
    fontSize: 14,
  },
  reserveButton: {
    backgroundColor: '#F97316',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 30,
  },
  reserveText: {
    color: '#FFFFFF', // Blanc sur orange
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default HomeContent;

