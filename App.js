import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

export default function App() {
  const [todoContent, setTodoContent] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Daily Todo</Text>

      <CreateTodo todoContent={todoContent} setTodoContent={setTodoContent} />

      <View style={styles.mainApp}>
        <View style={styles.todos}>
          <Todo />
          <Todo />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainApp: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  todos: {},
});
