import React, { useState } from "react";

const Input = ({ setTodos, todos }) => {
  const [inpValue, setInpValue] = useState("");

  return (
    <div className="flex gap-10">
      <input
        className="p-4 border rounded-xl"
        type="text"
        placeholder="Enter tasks..."
        onChange={(e) => setInpValue(e.target.value)}
      />
      <button
        onClick={() => setTodos([...todos, inpValue])}
        className="bg-blue-600 text-white rounded-xl p-4 cursor-pointer"
      >
        Add task
      </button>
    </div>
  );
};

export default Input;
