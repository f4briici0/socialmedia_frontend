import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AtSign,
  AlertCircle,
} from "lucide-react";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Estados para os valores das senhas e erros
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    // Validações
    if (password.length < 8) {
      newErrors.push("A senha deve ter pelo menos 8 caracteres.");
    }
    if (!/[A-Z]/.test(password)) {
      newErrors.push("A senha deve conter pelo menos uma letra maiúscula.");
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      newErrors.push(
        "A senha deve conter pelo menos um caractere especial (!, @, #, _, +, etc).",
      );
    }
    if (password !== confirmPassword) {
      newErrors.push("As senhas não coincidem.");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // Limpa os erros e prossegue com o cadastro
    setErrors([]);
    console.log("Validação concluída! Pronto para cadastrar.");
  };

  return (
    <div className="min-h-screen bg-[#111113] flex items-center justify-center p-6">
      <div className="bg-[#18181b] rounded-2xl p-8 border border-zinc-800/50 shadow-sm w-full max-w-lg relative overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-green-300/90 tracking-tight mb-2">
            Talki
          </h1>
          <p className="text-zinc-500 text-sm font-light">
            Crie sua conta e faça parte da nossa comunidade.
          </p>
        </div>

        {/* Formulário */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Input de Nome */}
          <div className="flex items-center gap-3 bg-[#111113]/50 border border-zinc-800/70 rounded-xl px-4 py-3 focus-within:border-zinc-600 transition-colors shadow-inner">
            <User
              className="text-zinc-500 shrink-0"
              size={20}
              strokeWidth={1.5}
            />
            <input
              type="text"
              required
              placeholder="Nome completo"
              className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-100 placeholder-zinc-600 text-base outline-none w-full"
            />
          </div>

          {/* Input de Nome de Usuário */}
          <div className="flex items-center gap-3 bg-[#111113]/50 border border-zinc-800/70 rounded-xl px-4 py-3 focus-within:border-zinc-600 transition-colors shadow-inner">
            <AtSign
              className="text-zinc-500 shrink-0"
              size={20}
              strokeWidth={1.5}
            />
            <input
              type="text"
              required
              placeholder="Nome de usuário"
              className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-100 placeholder-zinc-600 text-base outline-none w-full"
            />
          </div>

          {/* Input de E-mail */}
          <div className="flex items-center gap-3 bg-[#111113]/50 border border-zinc-800/70 rounded-xl px-4 py-3 focus-within:border-zinc-600 transition-colors shadow-inner">
            <Mail
              className="text-zinc-500 shrink-0"
              size={20}
              strokeWidth={1.5}
            />
            <input
              type="email"
              required
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Crie uma senha"
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

          {/* Input de Confirmar Senha */}
          <div className="flex items-center gap-3 bg-[#111113]/50 border border-zinc-800/70 rounded-xl px-4 py-3 focus-within:border-zinc-600 transition-colors shadow-inner">
            <Lock
              className="text-zinc-500 shrink-0"
              size={20}
              strokeWidth={1.5}
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repita sua senha"
              className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-100 placeholder-zinc-600 text-base outline-none w-full"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer shrink-0"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} strokeWidth={1.5} />
              ) : (
                <Eye size={18} strokeWidth={1.5} />
              )}
            </button>
          </div>

          {/* Renderização de Erros */}
          {errors.length > 0 && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mt-2">
              <ul className="space-y-1">
                {errors.map((error, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-red-400 text-xs"
                  >
                    <AlertCircle size={14} className="shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Checkbox de Termos */}
          <div className="flex items-start gap-2 mt-4 px-1">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-0.5 w-4 h-4 shrink-0 rounded border-zinc-700 bg-[#111113]/50 accent-green-400 cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-xs text-zinc-500 leading-relaxed cursor-pointer select-none"
            >
              Eu concordo com os{" "}
              <span className="text-blue-500 hover:text-blue-400 transition-colors underline">
                Termos de Serviço
              </span>{" "}
              e a{" "}
              <span className="text-blue-500 hover:text-blue-400 transition-colors underline">
                Política de Privacidade
              </span>
              .
            </label>
          </div>

          {/* Botão de Cadastro */}
          <button
            type="submit"
            className="w-full mt-6 cursor-pointer bg-gray-100/10 hover:bg-gray-100/20 text-white px-5 py-3 rounded-full text-sm font-semibold transition shadow-sm flex items-center justify-center gap-2 group"
          >
            Criar conta
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-zinc-600 border-t border-zinc-800/50 pt-6">
          Já tem uma conta?{" "}
          <a
            href="/entrar"
            className="text-green-300/90 hover:underline font-medium transition-colors"
          >
            Entrar
          </a>
        </div>
      </div>
    </div>
  );
};
