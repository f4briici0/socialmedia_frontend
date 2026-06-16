import { useState } from "react";
import {
  Heart,
  Image,
  MessageCircle,
  MoreHorizontal,
  Flag,
} from "lucide-react";

export const PostCard = ({
  authorName,
  timeAgo,
  avatarSrc,
  content,
  hasImage = false,
  likes,
  comments,
  ringColor = "ring-zinc-100/20",
  showBookmark = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleReport = () => {
    console.log("Post reportado!");
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#18181b] rounded-xl p-5 border border-zinc-800/50 shadow-sm relative">
      <div className="flex items-center gap-3 mb-5">
        <div className="cursor-pointer w-14 h-14 rounded-full mt-1 overflow-hidden shrink-0">
          <img
            src={avatarSrc}
            alt={`Avatar de ${authorName}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-zinc-100 text-sm hover:underline hover:cursor-pointer">
            {authorName}
          </p>
          <p className="text-xs text-zinc-600 mt-1">{timeAgo}</p>
        </div>

        <div className="ml-auto relative self-start -mt-1">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer text-zinc-600 hover:text-zinc-400 p-1"
          >
            <MoreHorizontal size={20} strokeWidth={1.5} />
          </button>

          {/* Menu Dropdown */}
          {isMenuOpen && (
            <>
              {/* Overlay invisível */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsMenuOpen(false)}
              ></div>

              {/* O Menu em si */}
              <div className="absolute right-0 bottom-full mb-2 w-36 bg-[#27272a] border border-zinc-700/50 rounded-xl shadow-lg z-20 overflow-hidden">
                <button
                  onClick={handleReport}
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:text-red-400 transition-colors cursor-pointer"
                >
                  <Flag size={16} strokeWidth={1.5} />
                  Denunciar
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {hasImage && (
        <div className="w-full h-48 bg-zinc-800 rounded-2xl mb-4 flex items-center justify-center border border-zinc-700">
          <Image size={48} strokeWidth={1} className="text-zinc-600" />
        </div>
      )}

      <p className="text-zinc-300 leading-relaxed text-base font-light">
        {content}
      </p>

      {/* MODIFICAÇÃO AQUI: Adicionado border-t e border-zinc-800/50 */}
      <div className="flex gap-7 mt-6 text-zinc-600 pt-4 border-t border-zinc-800/50">
        <button className="cursor-pointer flex items-center gap-2.5 transition group hover:text-red-500">
          <Heart
            size={20}
            strokeWidth={1.5}
            className="transition-colors group-hover:text-red-500 group-hover:fill-red-500"
          />
          <span className="text-sm">{likes}</span>
        </button>
        <button className="flex items-center gap-2.5 hover:text-zinc-300 transition cursor-pointer">
          <MessageCircle size={20} strokeWidth={1.5} />
          <span className="text-sm">{comments}</span>
        </button>
      </div>
    </div>
  );
};
