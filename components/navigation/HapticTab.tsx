// Composant: HapticTab
// Fournit un retour haptique (vibration courte) lorsque l'utilisateur appuie sur un onglet.
// Note: Expo Haptics se comporte différemment selon la plateforme (iOS/Android) ;
// ici nous combinons uniquement un retour léger pour iOS via l'API d'Expo.
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';

// Ce composant ajoute un retour haptique lors de l'appui sur un onglet de navigation.
export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      // Lorsque l'utilisateur appuie sur le bouton (onPressIn)
      onPressIn={(ev) => {
        // Si l'application tourne sur iOS
        // N'effectue le haptique que sur iOS (évite les comportements différents sur Android)
        if (process.env.EXPO_OS === 'ios') {
          // Déclenche un retour haptique léger
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        // Appelle la fonction onPressIn passée en props, si elle existe
        props.onPressIn?.(ev);
      }}
    />
  );
}
