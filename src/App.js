import React, { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import SearchBox from "./components/SearchBox";

function App() {
  const [input, setInput] = useState("");
  return (
    <center>
      <h1>Image Search Engine</h1>
      <SearchBox input={input} setInput={setInput} />
      <Gallery query={input} />
    </center>
  );
}

export default App;
