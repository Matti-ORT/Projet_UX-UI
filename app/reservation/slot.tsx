import { Header } from '@/components/common/Header';
import { formatPrice } from '@/utils/format';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronDown, ChevronLeft } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SlotSelectionScreen() {
  const router = useRouter();
  const { service, price } = useLocalSearchParams();
  // Normaliser les valeurs car useLocalSearchParams peut retourner string | string[]
  const serviceValue = Array.isArray(service) ? service[0] : service ?? '';
  const priceValue = Array.isArray(price) ? price[0] : price ?? '';
  const [expandedDate, setExpandedDate] = useState<string | null>('Mardi 02/01/2026');

  const handleSlotSelect = (date: string, time: string) => {
    const path = `/reservation/summary?service=${encodeURIComponent(
      serviceValue
    )}&price=${encodeURIComponent(priceValue)}&date=${encodeURIComponent(
      date
    )}&time=${encodeURIComponent(time)}`;
    router.push(path as any);
  };

  const toggleDate = (date: string) => {
    setExpandedDate(expandedDate === date ? null : date);
  };

  return (
    <View style={styles.root}>
      <Header title="Choix Creneau" />
      
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ChevronLeft size={24} color="#000" />
        <Text style={styles.backText}>Retour</Text>
      </TouchableOpacity>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        {serviceValue && (
          <View style={styles.selectedContainer}>
            <Text style={styles.selectedText}>{`Prestation: ${serviceValue}`}</Text>
            {priceValue && <Text style={styles.selectedPrice}>{formatPrice(priceValue)}</Text>}
          </View>
        )}
        <Text style={styles.sectionTitle}>Choix de la date & Heure</Text>

        {/* Date 1 */}
        <View style={styles.dateGroup}>
          <TouchableOpacity style={styles.dateHeader} onPress={() => toggleDate('Lundi 01/01/2026')}>
            <Text style={styles.dateText}>Lundi 01/01/2026</Text>
            <ChevronDown size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Date 2 (Expanded) */}
        <View style={styles.dateGroup}>
          <TouchableOpacity style={styles.dateHeader} onPress={() => toggleDate('Mardi 02/01/2026')}>
            <Text style={styles.dateText}>Mardi 02/01/2026</Text>
            <ChevronDown size={20} color="#000" />
          </TouchableOpacity>
          
          {expandedDate === 'Mardi 02/01/2026' && (
            <View style={styles.slotsContainer}>
              <View style={styles.slotsRow}>
                <TouchableOpacity style={styles.slotItem} onPress={() => handleSlotSelect('Mardi 02/01/2026', '10:00')}>
                  <Text style={styles.slotText}>10:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.slotItem} onPress={() => handleSlotSelect('Mardi 02/01/2026', '10:00')}>
                  <Text style={styles.slotText}>10:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.slotItem} onPress={() => handleSlotSelect('Mardi 02/01/2026', '10:00')}>
                  <Text style={styles.slotText}>10:00</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.slotsRow}>
                <TouchableOpacity style={styles.slotItem} onPress={() => handleSlotSelect('Mardi 02/01/2026', '10:00')}>
                  <Text style={styles.slotText}>10:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.slotItem} onPress={() => handleSlotSelect('Mardi 02/01/2026', '10:00')}>
                  <Text style={styles.slotText}>10:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.slotItem} onPress={() => handleSlotSelect('Mardi 02/01/2026', '10:00')}>
                  <Text style={styles.slotText}>10:00</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        {/* Date 3 */}
        <View style={styles.dateGroup}>
          <TouchableOpacity style={styles.dateHeader} onPress={() => toggleDate('Mercredi 03/01/2026')}>
            <Text style={styles.dateText}>Mercredi 03/01/2026</Text>
            <ChevronDown size={20} color="#000" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

// Masquer l'en-tête natif du Stack navigator pour utiliser notre Header personnalisé
export const options = {
  headerShown: false,
};

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
  selectedContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedText: {
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    fontWeight: '600',
  },
  selectedPrice: {
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '600',
  },
  dateGroup: {
    backgroundColor: '#F3F4F6',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  dateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  dateText: {
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
  },
  slotsContainer: {
    padding: 10,
    paddingTop: 0,
  },
  slotsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  slotItem: {
    backgroundColor: '#D1D5DB',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  slotText: {
    fontFamily: 'Roboto Condensed',
    fontSize: 14,
  },
});
