"use client";

import React, { useState } from "react";
import {
  Search,
  MoreVertical,
  Phone,
  Video,
  Paperclip,
  Send,
  Smile,
  Check,
  CheckCheck,
} from "lucide-react";

export const ChatPage = () => {
  const [message, setMessage] = useState("");

  // Mock da lista de conversas
  const contacts = [
    {
      id: 1,
      name: "Maria Oliveira",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      lastMessage: "Fechado! Amanhã a gente se fala então.",
      time: "10:42",
      unread: 2,
      online: true,
      active: true,
    },
    {
      id: 2,
      name: "Lucas Fernandes",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
      lastMessage: "Você viu o novo layout da home?",
      time: "Ontem",
      unread: 0,
      online: false,
      active: false,
    },
    {
      id: 3,
      name: "Juliana Costa",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      lastMessage: "Hahaha, sim! Muito bom 😂",
      time: "Segunda",
      unread: 0,
      online: true,
      active: false,
    },
  ];

  // Mock do histórico de mensagens do chat ativo
  const chatHistory = [
    {
      id: 1,
      sender: "Maria Oliveira",
      content: "Oi! Tudo bem? Conseguiu dar uma olhada naquele PR?",
      time: "10:30",
      isMe: false,
    },
    {
      id: 2,
      sender: "Você",
      content:
        "Opa, tudo bem! Olhei sim, deixei alguns comentários lá, mas no geral tá excelente. 🚀",
      time: "10:35",
      isMe: true,
      status: "read", // sent, delivered, read
    },
    {
      id: 3,
      sender: "Maria Oliveira",
      content:
        "Ah, maravilha! Vou ajustar os detalhes que você pontuou e já faço o merge.",
      time: "10:38",
      isMe: false,
    },
    {
      id: 4,
      sender: "Você",
      content: "Perfeito! Qualquer coisa me avisa.",
      time: "10:40",
      isMe: true,
      status: "read",
    },
    {
      id: 5,
      sender: "Maria Oliveira",
      content: "Fechado! Amanhã a gente se fala então.",
      time: "10:42",
      isMe: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#111113] p-4 sm:p-6 flex justify-center items-center">
      {/* Container Principal do Chat (Estilo Web App) */}
      <div className="w-full max-w-6xl h-[calc(100vh-3rem)] md:h-[85vh] bg-[#18181b] rounded-2xl border border-zinc-800/50 shadow-sm flex overflow-hidden">
        {/* COLUNA ESQUERDA: Lista de Conversas */}
        <aside className="w-full md:w-80 lg:w-96 border-r border-zinc-800/50 flex flex-col shrink-0 bg-[#18181b]">
          {/* Header da Sidebar */}
          <div className="p-5 border-b border-zinc-800/50 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-zinc-100">Mensagens</h2>
          </div>

          {/* Barra de Pesquisa */}
          <div className="p-4">
            <div className="flex items-center gap-3 bg-[#111113]/80 border border-zinc-800/70 rounded-xl px-4 py-2.5 focus-within:border-zinc-600 transition-colors shadow-inner">
              <Search
                className="text-zinc-500 shrink-0"
                size={18}
                strokeWidth={1.5}
              />
              <input
                type="text"
                placeholder="Buscar conversas..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-100 placeholder-zinc-600 text-sm outline-none w-full"
              />
            </div>
          </div>

          {/* Lista de Contatos */}
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-zinc-800/30 last:border-0 ${
                  contact.active ? "bg-zinc-800/50" : "hover:bg-zinc-800/20"
                }`}
              >
                {/* Avatar com indicador online */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {contact.online && (
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#18181b] rounded-full"></div>
                  )}
                </div>

                {/* Informações da conversa */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-sm font-semibold text-zinc-100 truncate">
                      {contact.name}
                    </h3>
                    <span className="text-xs text-zinc-500 shrink-0">
                      {contact.time}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p
                      className={`text-sm truncate ${contact.unread > 0 ? "text-zinc-300 font-medium" : "text-zinc-500 font-light"}`}
                    >
                      {contact.lastMessage}
                    </p>
                    {contact.unread > 0 && (
                      <div className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ml-2">
                        {contact.unread}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* COLUNA DIREITA: Área do Chat */}
        <main className="flex-1 flex flex-col bg-[#111113]/30 relative hidden md:flex">
          {/* Header do Chat */}
          <div className="h-[73px] border-b border-zinc-800/50 flex items-center justify-between px-6 bg-[#18181b] shrink-0">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={contacts[0].avatar}
                    alt="Maria Oliveira"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#18181b] rounded-full"></div>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-zinc-100">
                  Maria Oliveira
                </h2>
                <p className="text-xs text-green-400/90 font-medium">
                  Online agora
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-zinc-500">
              <button className="hover:text-zinc-300 transition-colors cursor-pointer">
                <MoreVertical size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Histórico de Mensagens */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="text-center mb-6">
              <span className="text-xs text-zinc-600 bg-zinc-800/40 px-3 py-1 rounded-full">
                Hoje
              </span>
            </div>

            {chatHistory.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.isMe ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl ${
                    msg.isMe
                      ? "bg-zinc-800 text-zinc-100 rounded-tr-sm border border-zinc-700/50 shadow-sm"
                      : "bg-[#27272a]/60 text-zinc-200 rounded-tl-sm border border-zinc-700/30"
                  }`}
                >
                  <p className="text-sm leading-relaxed font-light">
                    {msg.content}
                  </p>
                </div>

                <div className="flex items-center gap-1 mt-1 px-1">
                  <span className="text-[10px] text-zinc-600 font-medium">
                    {msg.time}
                  </span>
                  {msg.isMe && (
                    <CheckCheck
                      size={14}
                      className="text-green-400/80"
                      strokeWidth={2}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Área de Input de Texto */}
          <div className="p-4 bg-[#18181b] border-t border-zinc-800/50 shrink-0">
            <div className="flex items-center gap-3">
              <button className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer p-2 rounded-full hover:bg-zinc-800/50">
                <Paperclip size={20} strokeWidth={1.5} />
              </button>

              <div className="flex-1 flex items-center gap-2 bg-[#111113] border border-zinc-800/70 rounded-full px-4 py-2 focus-within:border-zinc-600 transition-colors shadow-inner">
                <button className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer shrink-0">
                  <Smile size={20} strokeWidth={1.5} />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva uma mensagem..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-100 placeholder-zinc-600 text-sm outline-none w-full"
                />
              </div>

              <button
                className={`p-3 rounded-full flex items-center justify-center transition-all shadow-sm ${
                  message.trim()
                    ? "bg-gray-100/10 hover:bg-gray-100/20 text-zinc-100 cursor-pointer"
                    : "bg-zinc-800/50 text-zinc-600 cursor-default"
                }`}
              >
                <Send
                  size={18}
                  strokeWidth={2}
                  className={message.trim() ? "translate-x-0.5" : ""}
                />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
