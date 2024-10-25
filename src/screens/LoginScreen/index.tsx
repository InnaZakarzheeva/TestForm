import React, { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import LinearGradientComponent from "../../components/LinearGradient";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  const onApply = () => { };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>TEST FORM</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <View style={styles.eclipseOuter}>
        <View style={styles.eclipseCenter}>
          <View style={styles.eclipseInner} />
        </View>
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
