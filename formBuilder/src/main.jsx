import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./routes/Login";
import Name from "./routes/Responses";

import SignOut from "./routes/SignOut";
import PublicProfile from "./routes/PublicProfile";
import ChooseUsername from "./routes/ChooseUsername";
import Dashboard from "./routes/Dashboard";
import Responses from "./routes/Responses";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="responses/:user" element={<Responses />} />
    </Routes>
  </BrowserRouter>
);
