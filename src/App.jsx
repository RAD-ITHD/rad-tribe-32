import React from "react";
import potatoImage from "./assets/potato.jpg";

const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <p>This is a simple picture of a potato.</p>
      <img src={potatoImage} alt="A potato" style={{ width: "300px", height: "auto" }} />
    </div>
  );
};

export default App;
