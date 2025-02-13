import React from "react";

function Click() {
  function handleClick() {
    alert("You Clicked me!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}

export default Click;
