import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <Svg
          width={width}
          height={180}
          viewBox={`0 0 ${width} 180`}
          style={styles.svg}
        >
          {/* Vague Orange (arrière-plan, dépasse légèrement pour créer une bordure) */}
          <Path
            d={`M0 0 H${width} V128 Q${width * 0.5} 188 0 128 Z`}
            fill="#F97316"
          />
          {/* Vague Bleue (premier plan) */}
          <Path
            d={`M0 0 H${width} V120 Q${width * 0.5} 180 0 120 Z`}
            fill="#1E3A8A"
          />
        </Svg>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 160,
    marginBottom: 20,
  },
  blueBackground: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    position: 'absolute',
    top: 60,
    left: 20,
    color: '#FFFFFF',
    fontFamily: 'Roboto Condensed',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
