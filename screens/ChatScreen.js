import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat screen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#023E8A",
    flex: 1,
    alignItems: "center", 
    justifyContent: "center", 
  },
});
