import React from "react";

const Todos = ({ todos }) => {
  return (
    <div className="border flex items-center justify-center w-[40%] min-h-[20%]">
      {todos.length ? <h1>{todos}</h1> : <h1>No tasks Added</h1>}
    </div>
  );
};

export default Todos;
