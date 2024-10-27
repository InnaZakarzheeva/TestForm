import React from "react";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.root}>
      <Pressable onPress={goBack}>
        <Text style={styles.backText}>{'<- Back'}</Text>
      </Pressable>
      <Text style={styles.title}>HOME</Text>
      <Text style={styles.description}>
        You are successfully login!
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
