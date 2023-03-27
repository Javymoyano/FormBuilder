import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./routes/Login";
import Name from "./routes/Name";
import Mail from "./routes/Mail";
import Terms from "./routes/Terms";
import Date from "./routes/Date";
import Country from "./routes/Country";
import SignOut from "./routes/SignOut";
import PublicProfile from "./routes/PublicProfile";
import ChooseUsername from "./routes/ChooseUsername";
import Dashboard from "./routes/Dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/name" element={<Name />} />
      <Route path="dashboard/mail" element={<Mail />} />
      <Route path="dashboard/date" element={<Date />} />
      <Route path="dashboard/country" element={<Country />} />
      <Route path="dashboard/terms" element={<Terms />} />
      <Route path="signout" element={<SignOut />} />
      <Route path="n/:username" element={<PublicProfile />} />
      <Route path="choose-username" element={<ChooseUsername />} />
    </Routes>
  </BrowserRouter>
);
