import React, { useState } from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  return (
    <div className="h-screen gap-10 w-screen flex flex-col justify-center items-center">
      <Input setTodos={setTodos} todos={todos} />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
