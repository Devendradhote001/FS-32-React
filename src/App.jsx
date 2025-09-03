import React from "react";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";

const App = () => {
  let name = "rahul";

  let arr = ["rahul", "ankur", "sarthak", "ayush"];

  return (
    <div>
      {arr.map((elem, index) => {
        return <Top key={index} name={elem}  />;
      })}
    </div>
  );
};

export default App;
