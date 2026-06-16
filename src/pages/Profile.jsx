"use client";

import React from "react";
import {
  MapPin,
  Calendar,
  Edit3,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Users,
} from "lucide-react";

export const ProfilePage = () => {
  // Dados mockados do usuário
  const user = {
    name: "Alex Silva",
    username: "@alexsilva",
    bio: "Desenvolvedor frontend, apaixonado por UI/UX, café e tecnologia. Criando coisas legais para a web. 🚀",
    location: "Paraná, Brasil",
    joinedDate: "Março de 2024",
    following: 142,
    followers: 1089,
    avatar:
      "https://i.pinimg.com/736x/03/1b/40/031b40787e65b38dd054777e76e655bd.jpg",
    cover:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
  };

  return (
    <div className="min-h-screen bg-[#111113] py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 lg:gap-8 relative">
        {/* COLUNA ESQUERDA: Card de Perfil (Sidebar) */}
        <aside className="w-full md:w-80 lg:w-96 shrink-0">
          <div className="bg-[#18181b] rounded-2xl border border-zinc-800/50 shadow-sm overflow-hidden sticky top-24">
            {/* Minicapa do Card */}
            <div className="w-full h-28 bg-zinc-800 relative">
              <img
                src={user.cover}
                alt="Capa"
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            {/* Conteúdo do Card */}
            <div className="px-6 pb-6 relative flex flex-col items-center text-center mt-[-3rem]">
              {/* Avatar Centralizado no Card */}
              <div className="w-24 h-24 rounded-full border-4 border-[#18181b] overflow-hidden bg-[#18181b] z-10 mb-3 shadow-md">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Principal */}
              <h1 className="text-xl font-bold text-zinc-100">{user.name}</h1>
              <p className="text-zinc-500 text-sm mb-4">{user.username}</p>

              <button className="w-full mb-5 cursor-pointer bg-gray-100/10 hover:bg-gray-100/20 border border-transparent text-zinc-100 py-2.5 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2">
                <Edit3 size={16} />
                Editar perfil
              </button>

              <div className="w-full text-left mb-6">
                <span className="text-zinc-500 text-xs uppercase tracking-wider font-semibold block mb-2">
                  SOBRE MIM
                </span>
                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  {user.bio}
                </p>
              </div>

              {/* Detalhes (Local e Data) */}
              <div className="w-full space-y-3 mb-6 pt-5 border-t border-zinc-800/50 text-zinc-400 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin size={16} strokeWidth={1.5} className="shrink-0" />
                  <span className="truncate">{user.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} strokeWidth={1.5} className="shrink-0" />
                  <span className="truncate">
                    Membro desde {user.joinedDate}
                  </span>
                </div>
              </div>

              {/* Status de Seguidores */}
              <div className="w-full grid grid-cols-2 gap-4 pt-5 border-t border-zinc-800/50">
                <div className="flex flex-col items-center p-2 rounded-xl hover:bg-zinc-800/30 transition cursor-pointer">
                  <span className="text-zinc-100 font-semibold text-lg">
                    {user.following}
                  </span>
                  <span className="text-zinc-500 text-xs uppercase tracking-wider mt-1">
                    Seguindo
                  </span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-xl hover:bg-zinc-800/30 transition cursor-pointer">
                  <span className="text-zinc-100 font-semibold text-lg">
                    {user.followers}
                  </span>
                  <span className="text-zinc-500 text-xs uppercase tracking-wider mt-1">
                    Seguidores
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* COLUNA DIREITA: Feed de Publicações */}
        <main className="flex-1 min-w-0">
          <div className="mb-6 border-b border-zinc-800/50 pb-4">
            <h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
              Publicações recentes
            </h2>
          </div>

          <div className="space-y-5">
            {/* Post de Texto */}
            <div className="bg-[#18181b] rounded-2xl p-5 border border-zinc-800/50 shadow-sm relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-zinc-100 text-sm hover:underline cursor-pointer">
                    {user.name}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">2 horas atrás</p>
                </div>
                <button className="ml-auto text-zinc-600 hover:text-zinc-400 p-1 cursor-pointer transition-colors">
                  <MoreHorizontal size={20} strokeWidth={1.5} />
                </button>
              </div>

              <p className="text-zinc-300 leading-relaxed text-base font-light">
                Acabei de refatorar a arquitetura do projeto inteiro. A sensação
                de ver tudo limpo, componentes padronizados e a performance lá
                em cima é indescritível! 💻✨
              </p>

              <div className="flex gap-6 mt-5 pt-4 border-t border-zinc-800/30 text-zinc-500">
                <button className="flex items-center gap-2 transition group hover:text-red-500 cursor-pointer">
                  <Heart
                    size={18}
                    strokeWidth={1.5}
                    className="group-hover:text-red-500"
                  />
                  <span className="text-sm font-medium">42</span>
                </button>
                <button className="flex items-center gap-2 hover:text-zinc-300 transition cursor-pointer">
                  <MessageCircle size={18} strokeWidth={1.5} />
                  <span className="text-sm font-medium">12</span>
                </button>
              </div>
            </div>

            {/* Post com Imagem */}
            <div className="bg-[#18181b] rounded-2xl p-5 border border-zinc-800/50 shadow-sm relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-zinc-100 text-sm hover:underline cursor-pointer">
                    {user.name}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">Ontem</p>
                </div>
                <button className="ml-auto text-zinc-600 hover:text-zinc-400 p-1 cursor-pointer transition-colors">
                  <MoreHorizontal size={20} strokeWidth={1.5} />
                </button>
              </div>

              <p className="text-zinc-300 leading-relaxed text-base font-light mb-4">
                Setup de hoje com muito café! O novo layout tá ficando incrível.
                ☕
              </p>

              <div className="w-full bg-zinc-800 rounded-xl mb-4 border border-zinc-700/50 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop"
                  className="w-full max-h-96 object-cover"
                  alt="Setup"
                />
              </div>

              <div className="flex gap-6 mt-5 pt-4 border-t border-zinc-800/30 text-zinc-500">
                <button className="flex items-center gap-2 transition group hover:text-red-500 cursor-pointer text-red-500">
                  <Heart size={18} strokeWidth={1.5} className="fill-red-500" />
                  <span className="text-sm font-medium">156</span>
                </button>
                <button className="flex items-center gap-2 hover:text-zinc-300 transition cursor-pointer">
                  <MessageCircle size={18} strokeWidth={1.5} />
                  <span className="text-sm font-medium">24</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
