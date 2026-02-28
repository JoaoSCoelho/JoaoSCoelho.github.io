"use client";

import {useEffect, useState, useRef, forwardRef} from "react";

export type MinhaSecaoProps = {
  children: React.ReactNode;
};

export type MinhaSecaoRef = {
  passouDaTela: boolean;
};

export const MinhaSecao = forwardRef<MinhaSecaoRef, MinhaSecaoProps>(function MinhaSecao(props, ref) {
  const secaoRef = useRef<HTMLDivElement>(null);
  const [passouDaTela, setPassouDaTela] = useState(false);

  useEffect(() => {
    const checarPosicao = () => {
      if (secaoRef.current) {
        const rect = secaoRef.current.getBoundingClientRect();
        // Verifica se o elemento está na tela
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setPassouDaTela(true);
        } else {
          setPassouDaTela(false);
        }
      }
    };

    // Checa assim que carrega
    checarPosicao();

    // Adiciona o listener de scroll
    window.addEventListener("scroll", checarPosicao);

    // Limpa o evento quando desmontar
    return () => window.removeEventListener("scroll", checarPosicao);
  }, []);

  return (
    <div
      ref={secaoRef}
      className={`transition-all duration-1000 delay-1000 ${
        passouDaTela ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <h2 className="text-3xl font-bold">Minha Seção Animada</h2>
      <p>Este texto vai aparecer suavemente quando entrar na tela!</p>
    </div>
  );
});
