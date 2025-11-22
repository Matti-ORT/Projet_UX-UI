import { Header } from '@/components/common/Header';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.root}>
      <Header title="Mes informations" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Mes coordonnées</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Prenom</Text>
            <TextInput 
              style={styles.input} 
              value="Karim" 
              editable={false} // Ou true si éditable
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Nom</Text>
            <TextInput 
              style={styles.input} 
              value="Beubar" 
              editable={false}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input} 
              value="Karimbeubar@gmail.com" 
              editable={false}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>N°telephone</Text>
            <TextInput 
              style={styles.input} 
              value="07 01 01 02 03" 
              editable={false}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Enregistrer</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Annuler</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/auth/login')}>
            <Text style={styles.logoutButtonText}>Se déconnecter</Text>
        </TouchableOpacity>

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
    fontSize: 22,
    fontWeight: '400',
    marginBottom: 30,
    marginTop: 10,
  },
  formContainer: {
    gap: 20,
    marginBottom: 40,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    width: '30%',
    color: '#000000',
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    fontWeight: '400',
  },
  input: {
    width: '65%',
    backgroundColor: '#D1D5DB', // Gris clair comme sur l'image
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: '#000000',
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    fontWeight: '500', // Texte un peu plus gras
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#1E3A8A', // Bleu foncé
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 5,
    minWidth: 120,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F97316', // Orange
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 5,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    fontWeight: '400',
  },
  logoutButton: {
    marginTop: 40,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  logoutButtonText: {
    color: '#EF4444', // Red color for logout
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
