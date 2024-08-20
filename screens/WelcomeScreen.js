import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import Animated, { Easing, useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const strokeDashoffset = useSharedValue(4500);

  useEffect(() => {
    strokeDashoffset.value = withTiming(0, {
      duration: 4000,
      easing: Easing.ease,
    });

    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: strokeDashoffset.value,
    };
  });

  return (
    <View style={styles.container}>
      <Svg height="200" width="200" viewBox="0 0 705.773 883.211">
        <AnimatedPath
          d="M954.77,816.078c0-113.13-91.71-204.839-204.84-204.839-102.692,0-190.021,79.665-204.839,178.227v338a298.656,298.656,0,0,0,53.993,30.394V954.644a204.286,204.286,0,0,0,150.846,66.273C863.06,1020.917,954.77,929.208,954.77,816.078Zm-355.686,0A153.789,153.789,0,0,1,752.873,662.289c84.936,0,149.439,68.853,149.439,153.789s-64.5,153.789-149.439,153.789A153.789,153.789,0,0,1,599.084,816.078Z"
          transform="translate(-397.113 -308.394)"
          stroke="#43bcec"
          strokeWidth="6"
          strokeDasharray="4500"
          animatedProps={animatedProps}
          fill="transparent"
        />
        <AnimatedPath
          d="M1073.085,713.425c-58.343-129.857-321.4-405.031-321.4-405.031L566.425,524.823S453.834,646.435,422.1,730.945s-46.06,216.429,36.848,314.337c2.207,2.605,4.387,5.129,6.559,7.628V908.58c-10.753-56.429-.1-113.923,16.1-156.512,25.972-68.264,118.128-166.5,118.128-166.5L751.382,410.75s213.72,227,261.474,331.888,22.536,201.81-40.3,278.4S778.191,1137.583,702.79,1120.1c-6.086-1.411-11.976-2.826-17.727-4.271v69.014c2.4.576,4.812,1.152,7.259,1.727,92.12,21.643,252.818-27.827,329.585-122.643S1131.427,843.282,1073.085,713.425Z"
          transform="translate(-397.113 -308.394)"
          stroke="#43bcec"
          strokeWidth="6"
          strokeDasharray="4500"
          animatedProps={animatedProps}
          fill="transparent"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default WelcomeScreen;
