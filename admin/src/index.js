import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";


const value = undefined;

// ✅ Check if array before accessing length
if (Array.isArray(value)) {
  const result = value.length;
  console.log(result);
} else {
  console.log('The value is NOT an array');
}

// ✅ Check if string before accessing length
if (typeof value === 'string') {
  const result = value.length;
  console.log(result);
} else {
  console.log('The value is NOT a string');
}

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);