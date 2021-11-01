import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";

export default function InputBox({
  placeholder,
  label,
  onPress,
  style,
  source,
  onChangeText,
  value,
  name,
}) {
  return (
    <>
      <Text style={styles.label_style}>{label}</Text>
      <Pressable style={style ? style : styles.input_style} onPress={onPress}>
        {source && <Image source={source} style={{ marginTop: -10 }} />}
        <Text
          style={styles.text_style}
          // value={value}
          // name={name}
          onChangeText={onChangeText}
        >
          {placeholder}
        </Text>
      </Pressable>
    </>
  );
}

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
    marginRight: "auto",
    marginLeft: "auto",
    height: 40,
    padding: 8,
    color: "#253C5B",
    borderColor: "rgba(37, 60, 91, 0.2)",
    borderWidth: 1,
    borderRadius: 7,
    flexDirection: "row",
  },
  text_style: {
    color: "#253C5B",
    opacity: 0.4,
  },
});
