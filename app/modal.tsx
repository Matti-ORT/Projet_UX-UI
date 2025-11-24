import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/common/ThemedText';
import { ThemedView } from '@/components/common/ThemedView';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is a modal</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}
/**
 * Feuille de styles pour la mise en page et les éléments du composant modal.
 *
 * @property container - Style du conteneur principal, centre le contenu verticalement et horizontalement, avec du padding.
 * @property link - Style pour les éléments de lien, ajoute une marge supérieure et un padding vertical pour l'espacement.
 */
const styles = StyleSheet.create({
  container: { // Style du conteneur principal
    flex: 1, // Prend tout l'espace disponible
    alignItems: 'center', // Centre horizontalement
    justifyContent: 'center', // Centre verticalement
    padding: 20, // Ajoute du padding autour du contenu
  },
  link: { // Style pour les éléments de lien
    marginTop: 15, // Espace au-dessus du lien
    paddingVertical: 15, // Padding vertical pour la zone tactile
  },
});


