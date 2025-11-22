import { Link, useRouter } from 'expo-router';
import { Key, User } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock login logic
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      {/* Header / Logo Area */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
           {/* ArrowLeft icon could go here if needed, but usually login is root or modal */}
        </TouchableOpacity>
        <Image 
          source={require('@/assets/images/logoBBRDV.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* White Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Connexion</Text>
        <View style={styles.divider} />

        <View style={styles.inputContainer}>
          <User color="#F97316" size={24} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nom d'utilisateur ou Email"
            placeholderTextColor="#9CA3AF"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Key color="#F97316" size={24} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Se connecter</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
            <Text style={styles.footerText}>Pas de compte ? </Text>
            <Link href="/auth/signup" asChild>
                <TouchableOpacity>
                    <Text style={styles.linkText}>S'inscrire</Text>
                </TouchableOpacity>
            </Link>
        </View>
      </View>
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
    marginBottom: 40,
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  logo: {
    width: 150,
    height: 150, // Adjust based on actual aspect ratio
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    width: '100%',
    alignItems: 'center',
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
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#F97316', // Orange
    width: '100%',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '100%',
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    color: '#000000',
  },
  loginButton: {
    backgroundColor: '#F97316', // Orange
    borderRadius: 25, // Rounded pill shape
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
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
