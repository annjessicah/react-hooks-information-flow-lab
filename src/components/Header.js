import React, { useState } from "react"

// Header Component
const Header = ({ onDarkModeClick }) => {
    return (
      <header>
        <h1>My App</h1>
        <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
      </header>
    );
  };
  