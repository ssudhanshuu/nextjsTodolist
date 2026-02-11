"use client";

import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo List</h2>

      {todos.length === 0 ? (
        <p>No Todos Found</p>
      ) : (
        todos.map((todo) => (
          <p key={todo.id}>{todo.text}</p>
        ))
      )}
    </div>
  );
}
