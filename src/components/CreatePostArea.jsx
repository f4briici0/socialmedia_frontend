import { useRef } from "react";
import { Code, ImageIcon } from "lucide-react";

export const CreatePost = () => {
  const textareaRef = useRef(null);

  const handleResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="bg-[#18181b] rounded-xl p-5 mb-8 border border-zinc-800/50 shadow-inner">
      <div className="flex gap-4">
        <div className="cursor-pointer w-14 h-14 rounded-full mt-1 overflow-hidden shrink-0">
          <img
            src="https://i.pinimg.com/736x/03/1b/40/031b40787e65b38dd054777e76e655bd.jpg"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <textarea
          ref={textareaRef}
          onChange={handleResize}
          placeholder="No que está pensando agora?..."
          className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-100 resize-none placeholder-zinc-600 text-base outline-none overflow-hidden"
          rows={2}
        />
      </div>
      <div className="flex justify-end items-center mt-3 pt-3">
        <div className="flex gap-4 text-zinc-500 mr-auto">
          <button className="hover:text-white transition-colors cursor-pointer">
            <ImageIcon size={20} strokeWidth={1.5} />
          </button>
        </div>
        <button className="cursor-pointer bg-gray-100/10 hover:bg-gray-100/20 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-sm">
          Postar
        </button>
      </div>
    </div>
  );
};
