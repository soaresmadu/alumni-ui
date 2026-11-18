import { blinker, dmSans } from "../fonts";
import anchorStyles from "../styles/LandingAnchor.module.css";

export function AboutSection() {
  return (
    <section
      aria-labelledby="sobre"
      className={`${dmSans.className} border-t-[clamp(1rem,2.1vw,2.5rem)] border-[#8DBA29] text-[#131313]`}
    >
      <div className="mx-auto px-4 pt-8 pb-12 text-center sm:px-10 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24">
        <h2
          id="sobre"
          className={`${blinker.className} ${anchorStyles.target} text-3xl leading-tight font-bold sm:text-4xl`}
        >
          sobre a alumni
        </h2>
        <p className="mx-auto mt-5 max-w-2xl sm:mt-6 text-base leading-[1.15] font-normal">
          o Alumni é um espaço para tirar seus projetos do papel no seu ritmo.
          reúna suas ideias, organize as tarefas por etapa e acompanhe o que
          você já concluiu. quando voltar a um projeto, fica mais fácil saber
          de onde retomar e decidir o que fazer em seguida.
        </p>

        <div
          aria-hidden="true"
          className="mx-auto mt-8 grid w-full max-w-[min(81vw,76rem)] grid-cols-3 gap-2 sm:mt-14 sm:gap-[clamp(1.5rem,4.5vw,4rem)]"
        >
          <div className="aspect-4/5 rounded-xl bg-[#FFA4BB] sm:rounded-2xl" />
          <div className="aspect-4/5 rounded-xl bg-[#F2BFFF] sm:rounded-2xl" />
          <div className="aspect-4/5 rounded-xl bg-[#ACFF93] sm:rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
