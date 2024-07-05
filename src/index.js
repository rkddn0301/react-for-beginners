import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// React.StrictMode 삭제 : console.log가 2번 찍힘
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
