import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TodoTable from "./Components/TodoTable";
import Todoform from "./Components/Todoform";
import { useState } from "react";

function App() {
  const [todoId, setTodoId] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<Todoform todoId={todoId} setTodoId={setTodoId} />}
        />
        <Route
          path="/table"
          exact
          element={<TodoTable setTodoId={setTodoId} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
