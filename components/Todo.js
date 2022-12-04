import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Todo({ text, id, handleDeleteTodo }) {
  return (
    <View style={styles.todo}>
      <View style={styles.todoNumber}>
        <View style={styles.order}>
          <Text style={styles.textColor}>{id}</Text>
        </View>
        <Text style={styles.todoText}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => handleDeleteTodo(id)}>
        <Text style={styles.btnText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  todo: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#f7f7f7",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoNumber: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  order: {
    width: 25,
    height: 25,
    backgroundColor: "#e66767",
    borderColor: "gray",
    borderRadius: "5",
    opacity: 0.5,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indexColor: {
    color: "white",
  },
  btn: {
    maxWidth: "80%",
    backgroundColor: "#e66767",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
  },
});
