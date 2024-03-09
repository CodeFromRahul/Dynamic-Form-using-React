import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  function handleName(event) {
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <input
        onChange={handleName}
        type="text"
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
