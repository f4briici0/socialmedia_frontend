import React from "react";
import { Disc, SkipBack, Play, SkipForward } from "lucide-react";
export function MiniPlayer() {
  return (
    <div className="bg-gradient-to-r from-zinc-900 to-[#141416] rounded-2xl p-4 mb-8 border border-zinc-800/40 flex items-center gap-4">
      {/* Ícone com animação de giro lento (8 segundos) */}
      <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center animate-[spin_8s_linear_infinite]">
        <Play className="text-rose-200/40 w-5 h-5" />
      </div>
      {/* Informações da Música */}
      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-tighter text-blue-300/60 font-bold">
          Ouvindo agora
        </p>
        <p className="text-sm text-zinc-200 font-medium">
          Luan Santana - SOLTEIROU
        </p>
      </div>
      {/* Controles */}
      <div className="flex items-center gap-3">
        <button className="text-zinc-500 hover:text-zinc-200 transition-colors">
          <SkipBack className="w-5 h-5" />
        </button>
        <button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-200 hover:bg-zinc-700 hover:scale-105 transition-all active:scale-95">
          {/* Margem à esquerda (ml-0.5) para centralizar visualmente o triângulo do Play */}
          <Play className="fill-current w-3 h-3 ml-0.5" />
        </button>
        <button className="text-zinc-500 hover:text-zinc-200 transition-colors">
          <SkipForward className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
