import React, { useState } from 'react';

export default function TextForm({ mode, heading }) {

  const [text, setText] = useState("");
  const [alert, setAlert] = useState(null);

  const isDark = mode === "dark";

  const showAlert = (message, type = "success") => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
    showAlert("Converted to UPPERCASE", "success");
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lowercase", "success");
  };

  const handleClear = () => {
    setText("");
    showAlert("Text cleared", "danger");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const styles = {
    backgroundColor: isDark ? "#1f1f1f" : "white",
    color: isDark ? "white" : "black",
    border: isDark ? "1px solid #444" : "1px solid #ccc"
  };

  return (
    <div style={{ color: isDark ? "white" : "black" }}>

      {/* Alert Box */}
      {alert && (
        <div
          style={{
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            color: "white",
            backgroundColor:
              alert.type === "success"
                ? "green"
                : alert.type === "warning"
                ? "orange"
                : "red"
          }}
        >
          {alert.message}
        </div>
      )}

      <h1>{heading}</h1>

      <textarea
        className="form-control my-3"
        rows="8"
        value={text}
        onChange={handleChange}
        style={styles}
        placeholder="Enter your text here..."
      ></textarea>

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

      <button
        className="btn btn-danger mx-2"
        onClick={handleClear}
      >
        Clear Text
      </button>

      <div className="my-4">

        <h2>Summary</h2>

        <p>
          {text.split(/\s+/).filter(Boolean).length} words and {text.length} characters
        </p>

        <p>
          {0.008 * text.split(/\s+/).filter(Boolean).length} Minutes read
        </p>

        <h2>Preview</h2>

        <p>
          {text.length > 0 ? text : "Nothing to preview"}
        </p>

      </div>

    </div>
  );
}