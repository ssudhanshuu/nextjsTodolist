import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Todo App</h1>

      <Link href="/add-todo">
        <button>Add Todo</button>
      </Link>

      <br /><br />

      <Link href="/todo-list">
        <button>View Todo List</button>
      </Link>
    </div>
  );
}
