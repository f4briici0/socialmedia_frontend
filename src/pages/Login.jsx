import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#111113] flex items-center justify-center p-6">
      <div className="bg-[#18181b] rounded-2xl p-8 border border-zinc-800/50 shadow-sm w-full max-w-md relative overflow-hidden">
        {/* Header / Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-green-300/90 tracking-tight mb-2">
            Talki
          </h1>
          <p className="text-zinc-500 text-sm font-light">
            Entre para ver o que está acontecendo.
          </p>
        </div>

        {/* Formulário */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* Input de E-mail */}
          <div className="flex items-center gap-3 bg-[#111113]/50 border border-zinc-800/70 rounded-xl px-4 py-3 focus-within:border-zinc-600 transition-colors shadow-inner">
            <Mail
              className="text-zinc-500 shrink-0"
              size={20}
              strokeWidth={1.5}
            />
            <input
              type="email"
              placeholder="E-mail"
              className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-100 placeholder-zinc-600 text-base outline-none w-full"
            />
          </div>

          {/* Input de Senha */}
          <div className="flex items-center gap-3 bg-[#111113]/50 border border-zinc-800/70 rounded-xl px-4 py-3 focus-within:border-zinc-600 transition-colors shadow-inner">
            <Lock
              className="text-zinc-500 shrink-0"
              size={20}
              strokeWidth={1.5}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-100 placeholder-zinc-600 text-base outline-none w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer shrink-0"
            >
              {showPassword ? (
                <EyeOff size={18} strokeWidth={1.5} />
              ) : (
                <Eye size={18} strokeWidth={1.5} />
              )}
            </button>
          </div>

          <div className="flex justify-end mt-1">
            <a
              href="#"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Esqueceu a senha?
            </a>
          </div>

          {/* Botão de Login */}
          <button
            type="submit"
            className="w-full mt-6 cursor-pointer bg-gray-100/10 hover:bg-gray-100/20 text-white px-5 py-3 rounded-full text-sm font-semibold transition shadow-sm flex items-center justify-center gap-2 group"
          >
            Entrar
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-zinc-600 border-t border-zinc-800/50 pt-6">
          Ainda não tem uma conta?{" "}
          <a
            href="/cadastrar"
            className="text-green-300/90 hover:underline font-medium transition-colors"
          >
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  );
};
