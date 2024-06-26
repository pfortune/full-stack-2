import React from "react";
import {createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import { PublicPage, Inbox, Profile, HomePage } from "../pages";
import LoginPage from "./loginPage";
import Header from "./header";
import AuthProvider from "./authContext";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/public" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route index element={<HomePage />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
