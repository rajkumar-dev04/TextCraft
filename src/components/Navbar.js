import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ mode, toggleMode, title }) {

  return (

    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: mode === "dark" ? "#1f1f1f" : "#babcbe",
        color: mode === "dark" ? "white" : "black"
      }}
    >

      <div className="container-fluid">

        <Link
          className="navbar-brand"
          to="/"
          style={{
            color: "inherit",
            textDecoration: "none"
          }}
        >
          {title}
        </Link>

        <div>

          <Link
            to="/"
            style={{
              color: "inherit",
              marginRight: "20px",
              textDecoration: "none"
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            style={{
              color: "inherit",
              marginRight: "20px",
              textDecoration: "none"
            }}
          >
            About
          </Link>

        </div>

        <div className="form-check form-switch">

          <input
            className="form-check-input"
            type="checkbox"
            onChange={toggleMode}
            checked={mode === "dark"}
          />

          <label style={{ color: "inherit" }}>
            Dark Mode
          </label>

        </div>

      </div>

    </nav>
  );
}