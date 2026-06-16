"use client";

import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  UserPlus,
  AtSign,
  MoreHorizontal,
  CheckCheck,
  Bell,
} from "lucide-react";

export const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState("all"); // 'all' ou 'mentions'

  // Mock de dados das notificações
  const notifications = [
    {
      id: 1,
      type: "like",
      user: {
        name: "Maria Oliveira",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      },
      content: "curtiu sua publicação.",
      postPreview:
        "Acabei de refatorar a arquitetura do projeto inteiro. A sensação de ver tudo limpo...",
      time: "Há 10 min",
      isRead: false,
    },
    {
      id: 2,
      type: "comment",
      user: {
        name: "Lucas Fernandes",
        avatar:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
      },
      content: "comentou na sua publicação:",
      postPreview:
        "Ficou sensacional! Qual padrão você usou para a componentização?",
      time: "Há 2 horas",
      isRead: false,
    },
    {
      id: 3,
      type: "follow",
      user: {
        name: "Juliana Costa",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      },
      content: "começou a seguir você.",
      postPreview: null,
      time: "Ontem",
      isRead: true,
    },
    {
      id: 4,
      type: "mention",
      user: {
        name: "Diego Santos",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      },
      content: "mencionou você em um comentário:",
      postPreview:
        "@alexsilva dá uma olhada nessa nova biblioteca de animações, acho que você vai curtir!",
      time: "Ontem",
      isRead: true,
    },
    {
      id: 5,
      type: "like",
      user: {
        name: "Camila Rocha",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      },
      content: "curtiu sua foto.",
      postPreview: null,
      time: "Segunda-feira",
      isRead: true,
    },
  ];

  // Função para renderizar o ícone correto baseado no tipo de notificação
  const getNotificationIcon = (type) => {
    switch (type) {
      case "like":
        return <Heart size={22} className="text-red-500 fill-red-500" />;
      case "comment":
        return (
          <MessageCircle size={22} className="text-blue-400 fill-blue-400/20" />
        );
      case "follow":
        return <UserPlus size={22} className="text-green-400" />;
      case "mention":
        return <AtSign size={22} className="text-purple-400" />;
      default:
        return <Bell size={22} className="text-zinc-400" />;
    }
  };

  // Filtragem básica para a aba de menções
  const displayedNotifications =
    activeTab === "all"
      ? notifications
      : notifications.filter(
          (n) => n.type === "mention" || n.type === "comment",
        );

  return (
    <div className="min-h-screen bg-[#111113] py-8 px-4 sm:px-6 flex justify-center">
      {/* Container Principal */}
      <div className="w-full max-w-2xl bg-[#18181b] rounded-2xl border border-zinc-800/50 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-4rem)] md:h-auto md:min-h-[80vh]">
        {/* Header */}
        <div className="p-5 md:p-6 border-b border-zinc-800/50 flex justify-between items-center sticky top-0 bg-[#18181b] z-10">
          <h1 className="text-2xl font-bold text-zinc-100 flex items-center gap-3">
            Notificações
          </h1>
        </div>

        {/* Abas (Tabs) */}
        <div className="flex border-b border-zinc-800/50 bg-[#18181b] sticky top-[73px] md:top-[81px] z-10 px-4 md:px-6">
          <button
            onClick={() => setActiveTab("all")}
            className={`mr-6 py-4 text-sm font-medium transition-colors cursor-pointer relative ${
              activeTab === "all"
                ? "text-zinc-100"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Todas
            {activeTab === "all" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 rounded-t-full"></div>
            )}
          </button>

          <button
            onClick={() => setActiveTab("mentions")}
            className={`mr-6 py-4 text-sm font-medium transition-colors cursor-pointer relative ${
              activeTab === "mentions"
                ? "text-zinc-100"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Menções
            {activeTab === "mentions" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 rounded-t-full"></div>
            )}
          </button>
        </div>

        {/* Lista de Notificações */}
        <div className="flex-1 overflow-y-auto">
          {displayedNotifications.length > 0 ? (
            displayedNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-5 md:p-6 border-b border-zinc-800/30 flex gap-4 transition-colors cursor-pointer relative group ${
                  notification.isRead
                    ? "hover:bg-zinc-800/20"
                    : "bg-blue-200/5 hover:bg-blue-200/10"
                }`}
              >
                {/* Ícone de Ação (Coração, Comentário, etc) */}
                <div className="shrink-0 mt-1 pl-2">
                  {getNotificationIcon(notification.type)}
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <img
                        src={notification.user.avatar}
                        alt={notification.user.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="text-zinc-600 hover:text-zinc-400 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal size={18} strokeWidth={1.5} />
                    </button>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    <span className="font-semibold text-zinc-100 hover:underline">
                      {notification.user.name}
                    </span>{" "}
                    <span className="font-light">{notification.content}</span>
                  </p>

                  {/* Preview do post ou comentário se existir */}
                  {notification.postPreview && (
                    <p className="mt-2 text-sm text-zinc-500 font-light leading-relaxed border-l-2 border-zinc-700 pl-3">
                      {notification.postPreview}
                    </p>
                  )}

                  <span className="text-xs text-blue-200/60 font-medium block mt-3">
                    {notification.time}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-zinc-500">
              <Bell size={40} strokeWidth={1} className="mb-4 text-zinc-600" />
              <p className="text-sm">Nenhuma notificação por aqui ainda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
