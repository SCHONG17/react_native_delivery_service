import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: "90%",
        }}
      >
        <Text>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
