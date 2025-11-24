import { Header } from '@/components/common/Header';
import { Calendar, Clock, MapPin } from 'lucide-react-native';
import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AppointmentsScreen() {
  // Etapes a venir (mock data) -- en réel on récupèrerait depuis une API
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      name: 'Salon de Coiffure Paris',
      address: '12 Rue de la Paix, Paris',
      date: '24 Novembre 2025',
      time: '14:00',
    },
  ]);

  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any | null>(null);

  const openCancelModal = (appt: any) => {
    setSelectedAppointment(appt);
    setCancelModalVisible(true);
  };

  const confirmCancel = () => {
    if (selectedAppointment) {
      setAppointments((prev) => prev.filter((a) => a.id !== selectedAppointment.id));
      setSelectedAppointment(null);
      setCancelModalVisible(false);
    }
  };

  const openDetailModal = (appt: any) => {
    setSelectedAppointment(appt);
    setDetailModalVisible(true);
  };

  const closeDetailModal = () => {
    setSelectedAppointment(null);
    setDetailModalVisible(false);
  };

  return (
    <View style={styles.root}>
      <Header title="Mes Rendez-vous" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>À venir</Text>

        {appointments.length === 0 && (
          <Text style={{ color: '#6B7280', fontFamily: 'Roboto Condensed' }}>Aucun rendez-vous à venir</Text>
        )}

        {appointments.map((appt) => (
          <View style={styles.card} key={appt.id}>
            <View style={styles.cardContent}>
              <Text style={styles.nomDuSalon}>{appt.name}</Text>

              <View style={styles.infoRow}>
                <MapPin size={16} color="#6B7280" />
                <Text style={styles.infoText}>{appt.address}</Text>
              </View>

              <View style={styles.infoRow}>
                <Calendar size={16} color="#6B7280" />
                <Text style={styles.infoText}>{appt.date}</Text>
              </View>

              <View style={styles.infoRow}>
                <Clock size={16} color="#6B7280" />
                <Text style={styles.infoText}>{appt.time}</Text>
              </View>

              <View style={styles.actionsRow}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => openCancelModal(appt)}>
                  <Text style={styles.cancelText}>Annuler</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewButton} onPress={() => openDetailModal(appt)}>
                  <Text style={styles.viewText}>Voir détails</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

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

      {/* Confirmation modal pour annuler */}
      <Modal
        visible={cancelModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setCancelModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Annuler le rendez-vous</Text>
            <Text style={{ fontFamily: 'Roboto Condensed', color: '#374151' }}>
              Êtes-vous sûr(e) de vouloir annuler ce rendez-vous ?
            </Text>
            <View style={styles.modalActions}>
              <Pressable style={[styles.modalBtn]} onPress={() => setCancelModalVisible(false)}>
                <Text style={{ fontFamily: 'Roboto Condensed', color: '#374151' }}>Non</Text>
              </Pressable>
              <Pressable style={[styles.modalBtn, { backgroundColor: '#EF4444', borderRadius: 6 }]} onPress={confirmCancel}>
                <Text style={{ fontFamily: 'Roboto Condensed', color: '#fff' }}>Oui, annuler</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal pour voir les détails */}
      <Modal
        visible={detailModalVisible}
        transparent
        animationType="slide"
        onRequestClose={closeDetailModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Détails du rendez-vous</Text>
            {selectedAppointment ? (
              <View>
                <Text style={{ fontFamily: 'Roboto Condensed', color: '#374151' }}>{selectedAppointment.name}</Text>
                <Text style={{ fontFamily: 'Roboto Condensed', color: '#6B7280' }}>{selectedAppointment.address}</Text>
                <Text style={{ fontFamily: 'Roboto Condensed', color: '#6B7280' }}>{selectedAppointment.date} — {selectedAppointment.time}</Text>
              </View>
            ) : null}
            <View style={styles.modalActions}>
              <Pressable style={[styles.modalBtn]} onPress={closeDetailModal}>
                <Text style={{ fontFamily: 'Roboto Condensed', color: '#374151' }}>Fermer</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  ,
  // modal styles
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  modalCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    maxWidth: 420,
  },
  modalTitle: {
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    marginBottom: 8,
    color: '#111827'
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12
  },
  modalBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 8,
  }
});
