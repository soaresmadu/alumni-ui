import Link from "next/link";
import styles from "../styles/LandingActions.module.css";
import { blinker, dmSans } from "../fonts";
import anchorStyles from "../styles/LandingAnchor.module.css";

export function JoinSection() {
  return (
    <section
      id="plataforma"
      aria-labelledby="join-title"
      className={`${dmSans.className} ${anchorStyles.target} text-[#131313]`}
    >
      <p className="bg-[#FF6D1F] px-3 py-1.5 text-center text-[0.625rem] leading-tight font-extrabold tracking-wider uppercase">
        crie sua conta e comece seu primeiro projeto
      </p>

      <div className="mx-auto max-w-360 px-[clamp(1.5rem,8vw,8rem)] pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div className="max-w-xl">
          <h2
            id="join-title"
            className={`${blinker.className} text-2xl leading-tight sm:leading-none font-bold tracking-tight lowercase sm:text-4xl`}
          >
            junte-se ao alumni para começar{" "}
            <br className="hidden md:block" />
            a desenvolver seus projetos
          </h2>

          <p className="mt-5 text-base leading-snug font-normal">
            crie sua conta e escolha uma ideia que você quer tirar do papel.
          </p>

          <p className="mt-5 text-base leading-snug sm:mt-7 sm:text-lg font-normal">
            comece anotando o que você quer alcançar. divida o projeto em etapas
            que caibam na sua rotina e registre o que já fez. assim, sempre que
            voltar, você vai saber de onde retomar e o que vale fazer a seguir.
          </p>

          <Link href="/login" className={`${styles.access} mt-7 block w-full rounded-2xl border-2 border-[#200BDD] px-4 py-2.5 text-center text-xs font-bold text-[#200BDD] uppercase`}>
            Clique aqui para acessar a plataforma da alumni
          </Link>
        </div>
      </div>
    </section>
  );
}
