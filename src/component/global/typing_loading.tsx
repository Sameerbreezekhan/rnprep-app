import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const TypingIndicator = () => {
  const bounce1 = useRef(new Animated.Value(0)).current;
  const bounce2 = useRef(new Animated.Value(0)).current;
  const bounce3 = useRef(new Animated.Value(0)).current;

  const createAnimation = (animatedValue: Animated.Value, delay: number) => {
    return Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(animatedValue, {
          toValue: -6,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    );
  };

  useEffect(() => {
    Animated.parallel([
      createAnimation(bounce1, 0),
      createAnimation(bounce2, 150),
      createAnimation(bounce3, 300),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dot, { transform: [{ translateY: bounce1 }] }]} />
      <Animated.View style={[styles.dot, { transform: [{ translateY: bounce2 }] }]} />
      <Animated.View style={[styles.dot, { transform: [{ translateY: bounce3 }] }]} />
    </View>
  );
};

export default TypingIndicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 10,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#555',
    marginHorizontal: 2,
  },
});