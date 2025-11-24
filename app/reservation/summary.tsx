import { Header } from '@/components/common/Header';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { CheckCircle, ChevronLeft } from 'lucide-react-native';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SummaryScreen() {
  const router = useRouter();
  const { service, price, date, time } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    router.push('/(tabs)'); // Retour à l'accueil
  };

  return (
    <View style={styles.root}>
      <Header title="Resumer" />
      
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ChevronLeft size={24} color="#000" />
        <Text style={styles.backText}>Retour</Text>
      </TouchableOpacity>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.label}>Prestation Selectionnée</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{service ?? 'Aucune'}</Text>
          {price && <Text style={[styles.infoText, { color: '#6B7280' }]}>{`€${price}`}</Text>}
        </View>

        <Text style={styles.label}>Date & Heure</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{date ? `${date} — ${time ?? ''}` : 'Non choisi'}</Text>
        </View>

        <Text style={styles.label}>Identification</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Karim Beubar</Text>
          <Text style={[styles.infoText, { textDecorationLine: 'underline' }]}>Karimbeubar@gmail.com</Text>
          <Text style={styles.infoText}>07 01 01 02 03</Text>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>Confirmer</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Modal de confirmation */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <CheckCircle size={64} color="#10B981" style={styles.modalIcon} />
            <Text style={styles.modalTitle}>Rendez-vous confirmé !</Text>
            <Text style={styles.modalText}>Votre rendez-vous a été pris en compte avec succès.</Text>
            
            <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
              <Text style={styles.modalButtonText}>Retour à l'accueil</Text>
            </TouchableOpacity>
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
  label: {
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 20,
  },
  infoBox: {
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    padding: 15,
  },
  infoText: {
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
  },
  confirmButton: {
    backgroundColor: '#F97316',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 40,
    alignSelf: 'center',
    paddingHorizontal: 40,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalIcon: {
    marginBottom: 20,
  },
  modalTitle: {
    fontFamily: 'Roboto Condensed',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#4B5563',
  },
  modalButton: {
    backgroundColor: '#1E3A8A',
    borderRadius: 10,
    padding: 12,
    elevation: 2,
    minWidth: 150,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto Condensed',
  },
});
