"use client";

import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import Link from "next/link";
// import { TodoContext } from "../context/TodoContext";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAdd = () => {
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Add Todo</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
         <Link href="/todo-list">
        <button>View Todo List</button>
      </Link>
    </div>
  );
}
