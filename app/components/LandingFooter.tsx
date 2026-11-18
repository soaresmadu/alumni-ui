import { bodoniModa, dmSans } from "../fonts";
import styles from "../styles/LandingFooter.module.css";

export function LandingFooter() {
  return (
    <footer className={`${dmSans.className} ${styles.footer}`}>
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-6">
          <div>
            <a href="#inicio" className={`${bodoniModa.className} text-3xl font-black`}>
              alumni.
            </a>
            <p className="mt-2 text-sm">projetos em ordem. ideias em movimento.</p>
          </div>

          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap gap-x-4 gap-y-3 text-sm sm:gap-x-6 font-bold">
              <li><a href="#inicio" className="hover:underline">home</a></li>
              <li><a href="#sobre" className="hover:underline">sobre a Alumni</a></li>
              <li><a href="#plataforma" className="hover:underline">conheça a plataforma</a></li>
            </ul>
          </nav>
        </div>

        <p className={`${styles.credit} mt-7 border-t pt-4 text-xs`}>
          © 2026 ALUMNI. desenvolvido por{" "}
          <a href="https://github.com/soaresmadu" className="font-bold underline">
            soaresmadu no GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
