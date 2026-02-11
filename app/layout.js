import { TodoProvider } from "./context/TodoContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TodoProvider>
          {children}
        </TodoProvider>
      </body>
    </html>
  );
}
