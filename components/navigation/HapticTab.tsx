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
