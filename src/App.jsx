import React from "react";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";

const App = () => {

  return (
    <div>
      <Top name={name} />
      <Middle />
      <Bottom />
    </div>
  );
};

export default App;
