import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoContent, setTodoContent] = useState("");
  console.log(todoContent);
  console.log(todos);
  const handleAddTodo = () => {
    if (!todoContent) return;

    Keyboard.dismiss();

    console.log("clicked");
    setTodos((prev) => [...prev, { id: prev.length + 1, text: todoContent }]);
    setTodoContent("");
  };

  const handleDeleteTodo = (id) => {
    const fitterdTodo = todos.filter((todo) => todo.id !== id);
    setTodos(fitterdTodo);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Daily Todo</Text>

      <CreateTodo
        todoContent={todoContent}
        setTodoContent={setTodoContent}
        handleAddTodo={handleAddTodo}
      />

      <View style={styles.mainApp}>
        <View style={styles.todos}>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              id={todo?.id}
              text={todo?.text}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
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
