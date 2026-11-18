import { dmSans } from "../fonts";

export function LandingBanner() {
  return (
    <p
      id="inicio"
      className={`${dmSans.className} bg-[#200BDD] px-3 py-1.5 text-center text-[0.625rem] leading-tight font-extrabold tracking-wider text-white`}
    >
      PLANEJAMENTO SIMPLES &nbsp;•&nbsp; PROJETOS VISÍVEIS &nbsp;•&nbsp; OBJETIVOS ALINHADOS
    </p>
  );
}
