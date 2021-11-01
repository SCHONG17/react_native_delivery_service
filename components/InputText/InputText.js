import React from "react";
import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";

const InputText = (props) => {
  // const [text, onChangeText] = React.useState({ value });
  const { placeholder, label, onPress, value, onChange, onChangeText } = props;

  return (
    <View>
      <Text style={styles.label_style}>{label}</Text>
      <TextInput
        style={styles.input_style}
        placeholder={placeholder}
        onChange={onChange}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  label_style: {
    color: "#253C5B",
    fontSize: 10,
    marginBottom: 6,
  },
  input_style: {
    fontSize: 16,
    marginBottom: 20,
    width: "100%",
    height: 40,
    padding: 8,
    color: "#253C5B",
    borderColor: "rgba(37, 60, 91, 0.2)",
    borderWidth: 1,
    borderRadius: 7,
    opacity: 0.4,
  },
});
