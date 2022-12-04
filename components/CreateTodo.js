import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function CreateTodo(props) {
  const { todoContent, setTodoContent } = props;
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.createTodoBox}
      >
        <TextInput
          style={styles.input}
          placeholder="Write here..."
          value={todoContent}
          onChangeText={(text) => setTodoContent(text)}
        ></TextInput>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.addBtn}>ADD</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  createTodoBox: {
    displayL: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: "#c0c0c0",
    borderRadius: 2,
    borderWidth: 1,
    width: 250,
    marginRight: 5,
  },
  btn: {
    backgroundColor: "#63cdda",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 2,
  },
  addBtn: {},
});
