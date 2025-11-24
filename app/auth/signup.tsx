import { Link, useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignupScreen() {
  const router = useRouter();
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Mock signup logic
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
           <ArrowLeft color="#000" size={28} /> 
        </TouchableOpacity>
        <Image 
          source={require('@/assets/images/logoBBRDV.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Inscription</Text>
        <View style={styles.divider} />

        <ScrollView showsVerticalScrollIndicator={false} style={styles.formScroll}>
            <View style={styles.row}>
                <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
                    <Text style={styles.label}>Nom</Text>
                    <TextInput
                        style={styles.input}
                        value={nom}
                        onChangeText={setNom}
                    />
                </View>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                    <Text style={styles.label}>Prénom</Text>
                    <TextInput
                        style={styles.input}
                        value={prenom}
                        onChangeText={setPrenom}
                    />
                </View>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Téléphone</Text>
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Mot de passe</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Confirmer le mot de passe</Text>
                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                <Text style={styles.signupButtonText}>S'inscrire</Text>
            </TouchableOpacity>
            
            <View style={styles.footer}>
                <Text style={styles.footerText}>Déjà un compte ? </Text>
                <Link href="/auth/login" asChild>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Se connecter</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </ScrollView>
      </View>
      
      <TouchableOpacity onPress={() => router.back()} style={styles.absoluteBack}>
           <ArrowLeft color="#000" size={28} /> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A8A', // Deep Blue
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    marginTop: 40, // Space for status bar
  },
  logo: {
    width: 150,
    height: 80,
  },
  absoluteBack: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  backButton: {
    display: 'none', // Using absolute one instead
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    flex: 1, // Take remaining space
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontFamily: 'Roboto Condensed',
    fontSize: 24,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#F97316', // Orange
    width: '100%',
    marginBottom: 20,
  },
  formScroll: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontFamily: 'Roboto Condensed',
    fontSize: 14,
    color: '#000000',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    color: '#000000',
  },
  signupButton: {
    backgroundColor: '#F97316', // Orange
    borderRadius: 25,
    paddingVertical: 12,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  footerText: {
    fontFamily: 'Roboto Condensed',
    color: '#6B7280',
  },
  linkText: {
    fontFamily: 'Roboto Condensed',
    color: '#F97316',
    fontWeight: 'bold',
  },
});
