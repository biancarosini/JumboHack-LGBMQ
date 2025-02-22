import React from "react";
import { useLocation } from "react-router-dom";

const RabbitHole = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Access data passed from FormComponent

  return (
    <div>
      <h1>Welcome to the Rabbit Hole!</h1>
      <p>You entered: {data}</p>
    </div>
  );
};

export default RabbitHole;
//chatgpt wrote this