import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ProfilePage } from "./pages/Profile";
import { ChatPage } from "./pages/Chat";
import { NotificationsPage } from "./pages/Notifications";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} path="/" />
        <Route index element={<Login />} path="/entrar" />
        <Route index element={<Register />} path="/cadastrar" />
        <Route index element={<ProfilePage />} path="/perfil" />
        <Route index element={<ChatPage />} path="/mensagens" />
        <Route index element={<NotificationsPage />} path="/notificacoes" />
      </Routes>
    </BrowserRouter>
  );
}
