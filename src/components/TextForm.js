import React, { useState } from 'react';

export default function TextForm({ mode, heading }) {

  const [text, setText] = useState("");

  const isDark = mode === "dark";

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
  }

  const handleClear = () => {
    setText("");
  };

  return (

    <div style={{ color: isDark ? "white" : "black" }}>

      <h1>{heading}</h1>

      <textarea
        className="form-control my-3"
        rows="8"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          backgroundColor: isDark ? "#1f1f1f" : "white",
          color: isDark ? "white" : "black"
        }}
      />

      <button
        className="btn btn-primary mx-2"
        onClick={handleUppercase}
      >
        Uppercase
      </button>

      <button
        className="btn btn-primary mx-2"
        onClick={handleLowercase}
      >
        Lowercase
      </button>

      <button className="btn btn-secondary mx-2" onClick={handleCopy}>
        Copy
      </button>

      <button
        className="btn btn-danger mx-2"
        onClick={handleClear}
      >
        Clear
      </button>

      <div className="my-3">

        <h2>Summary</h2>

        <p>
          {text.split(/\s+/).filter(Boolean).length} words,
          {" "}
          {text.length} characters
        </p>

        <h2>Preview</h2>

        <p>
          {text || "Nothing to preview"}
        </p>

      </div>

    </div>
  );
}