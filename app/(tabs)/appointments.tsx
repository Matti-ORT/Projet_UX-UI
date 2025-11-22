import { Header } from '@/components/common/Header';
import { Calendar, Clock, MapPin } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AppointmentsScreen() {
  return (
    <View style={styles.root}>
      <Header title="Mes Rendez-vous" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>À venir</Text>

        {/* Carte RDV */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.nomDuSalon}>Salon de Coiffure Paris</Text>
            
            <View style={styles.infoRow}>
              <MapPin size={16} color="#6B7280" />
              <Text style={styles.infoText}>12 Rue de la Paix, Paris</Text>
            </View>

            <View style={styles.infoRow}>
              <Calendar size={16} color="#6B7280" />
              <Text style={styles.infoText}>24 Novembre 2025</Text>
            </View>

            <View style={styles.infoRow}>
              <Clock size={16} color="#6B7280" />
              <Text style={styles.infoText}>14:00</Text>
            </View>

            <View style={styles.actionsRow}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewText}>Voir détails</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Passés</Text>
        <View style={[styles.card, { opacity: 0.7 }]}>
           <View style={styles.cardContent}>
            <Text style={styles.nomDuSalon}>Barber Shop Deluxe</Text>
             <View style={styles.infoRow}>
              <Calendar size={16} color="#6B7280" />
              <Text style={styles.infoText}>10 Octobre 2025</Text>
            </View>
             <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Terminé</Text>
             </View>
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
    paddingBottom: 100,
  },
  sectionTitle: {
    color: '#000000',
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    marginBottom: 16,
    padding: 16,
  },
  cardContent: {
    gap: 8,
  },
  nomDuSalon: {
    color: '#000000',
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    color: '#4B5563',
    fontFamily: 'Roboto Condensed',
    fontSize: 14,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 10,
  },
  cancelButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  cancelText: {
    color: '#EF4444',
    fontFamily: 'Roboto Condensed',
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: '#F97316',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  viewText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto Condensed',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusBadge: {
      alignSelf: 'flex-start',
      backgroundColor: '#D1FAE5',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      marginTop: 4
  },
  statusText: {
      color: '#065F46',
      fontSize: 12,
      fontFamily: 'Roboto Condensed',
      fontWeight: 'bold'
  }
});
