import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Buttons({
  disabled,
  title,
  onPress,
  onClick,
  types,
  style,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      type={types}
      disabled={disabled}
      style={disabled ? styles.disabled : style ? style : styles.button}
    >
      <Text style={style ? styles.white : styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F48802",
    padding: 16,
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 10,
    borderRadius: 25,
  },
  disabled: {
    alignItems: "center",
    backgroundColor: "#707070",
    padding: 16,
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 10,
    borderRadius: 25,
  },
  white: {
    color: "#F48802",
  },
});
