import React from "react";
import {
  Bell,
  Image as ImageIcon,
  Mic,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Bookmark,
  Camera,
  Home,
  Search,
  User,
} from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#111113]/90 backdrop-blur-sm border-b border-zinc-800/50 px-6 py-3">
      <div className="max-w-xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-green-300/90 tracking-tight">
          Talki
        </h1>
        <div className="flex items-center gap-5 text-zinc-500">
          <button className="cursor-pointer hover:text-white transition-colors">
            <Bell size={25} strokeWidth={1.5} />
          </button>
          <div className="cursor-pointer w-15 h-15  rounded-full mt-1 overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/03/1b/40/031b40787e65b38dd054777e76e655bd.jpg"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
