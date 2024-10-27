import React, { useEffect, useMemo, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import LinearGradientComponent from "../../components/LinearGradient";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const LoginScreen = () => {
  const scale = useSharedValue(1);
  const innerCircular = useSharedValue(0);
  const centerCircular = useSharedValue(0);
  const outerCircular = useSharedValue(0);
  const outerSecondCircular = useSharedValue(0);

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  useEffect(() => {
    scale.value = withRepeat(withTiming(scale.value * 0.5, { duration: 700 }), -1, true);

    innerCircular.value = withRepeat(withTiming(1, { duration: 1500 }), -1, false);
    centerCircular.value = withRepeat(withTiming(1, { duration: 2500 }), -1, false);
    outerCircular.value = withRepeat(withTiming(1, { duration: 5500 }), -1, false);
    outerSecondCircular.value = withRepeat(withTiming(1, { duration: 1500 }), -1, false);
  }, []);

  const inputRange = useMemo(() => {
    const range = [];
    for (var i = 0; i <= 50; ++i) {
      range.push(i / 50);
    }
    return range;
  }, []);

  const callculateRange = (radius: number) => {
    const rangeX = [];
    const rangeY = [];

    for (var i = 0; i <= 50; ++i) {
      rangeX.push(Math.sin(i / 50 * Math.PI * 2) * radius);
      rangeY.push(-Math.cos(i / 50 * Math.PI * 2) * radius);
    }
   
    return {
      rangeX,
      rangeY,
    }
  };

  const outputRange = useMemo(() => {
    return {
      innerRangeX: callculateRange(75).rangeX,
      innerRangeY: callculateRange(75).rangeY,
      centerRangeX: callculateRange(120).rangeX,
      centerRangeY: callculateRange(120).rangeY,
      outerRangeX: callculateRange(165).rangeX,
      outerRangeY: callculateRange(165).rangeY,
    }
  }, [callculateRange]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const rotateInnerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(innerCircular.value, inputRange, outputRange.innerRangeX) },
      { translateY: interpolate(innerCircular.value, inputRange, outputRange.innerRangeY) },
    ],
  }));
  
  const rotateCenterStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(centerCircular.value, inputRange, outputRange.centerRangeX) },
      { translateY: interpolate(centerCircular.value, inputRange, outputRange.centerRangeY) },
    ],
  }));

  const rotateOuterStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(outerCircular.value, inputRange, outputRange.outerRangeX) },
      { translateY: interpolate(outerCircular.value, inputRange, outputRange.outerRangeY) },
    ],
  }));

  const rotateOuterSecondStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(outerSecondCircular.value, inputRange, outputRange.outerRangeX) },
      { translateY: interpolate(outerSecondCircular.value, inputRange, outputRange.outerRangeY) },
    ],
  }));

  const onApply = () => { };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>TEST FORM</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <View style={styles.eclipseOuter}>
        <View style={styles.eclipseCenter}>
          <View style={styles.eclipseInner}>
            <Animated.Image
              source={require('../../images/yellowFrame.png')}
              resizeMode="contain"
              style={[animatedStyle, styles.imageFrame]}
            />
            <Animated.Image
              source={require('../../images/4.png')}
              resizeMode="contain"
              style={[rotateInnerStyle, styles.imageIcon]}
            />
          </View>
          <Animated.Image
            source={require('../../images/3.png')}
            resizeMode="contain"
            style={[rotateCenterStyle, styles.imageIcon]}
          />
        </View>
        <Animated.Image
          source={require('../../images/2.png')}
          resizeMode="contain"
          style={[rotateOuterSecondStyle, styles.imageSmallIcon]}
        />
        <Animated.Image
          source={require('../../images/1.png')}
          resizeMode="contain"
          style={[rotateOuterStyle, styles.imageSmallIcon]}
        />
      </View>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="next"
        style={styles.input}
      />
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        returnKeyType="done"
        style={styles.input}
      />

      <Pressable onPress={onApply} style={styles.button}>
        <LinearGradientComponent fromColor="#0098EA" toColor="#002584" style={styles.gradient}>
          <Text style={styles.btnText}>Apply</Text>
        </LinearGradientComponent>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;
