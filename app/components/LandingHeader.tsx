import Link from "next/link";
import styles from "../styles/LandingActions.module.css";
import { bodoniModa, dmSans } from "../fonts";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 mx-auto mt-3 sm:mt-6 w-[calc(100%-2rem)] max-w-7xl lg:w-[92%]">
      <div
        className={`${dmSans.className} grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2 gap-y-1 sm:gap-x-4 sm:gap-y-2 rounded-[18px] border border-neutral-900 bg-[#E0ED40] px-3 py-2 text-neutral-950 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-[7%]`}
      >
        <a
          href="#inicio"
          aria-label="Alumni, página inicial"
          className={`${bodoniModa.className} col-start-1 row-start-1 w-fit text-2xl sm:text-3xl leading-none font-black`}
        >
          alumni.
        </a>

        <nav
          aria-label="Menu principal"
          className="col-span-2 col-start-1 row-start-2 justify-self-center lg:col-span-1 lg:col-start-2 lg:row-start-1"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-3 text-center text-xs lg:gap-x-1 font-bold uppercase sm:text-sm">
            <li><a className={`${styles.menuLink} inline-flex min-h-9 items-center lg:min-h-0`} href="#inicio">Home</a></li>
            <li aria-hidden="true" className="hidden lg:list-item">•</li>
            <li><a className={`${styles.menuLink} inline-flex min-h-9 items-center lg:min-h-0`} href="#sobre">sobre a Alumni</a></li>
            <li aria-hidden="true" className="hidden lg:list-item">•</li>
            <li><a className={`${styles.menuLink} inline-flex min-h-9 items-center lg:min-h-0`} href="#plataforma">Conheça a plataforma</a></li>
          </ul>
        </nav>

        <Link href="/login"
          className={`${styles.headerAccess} col-start-2 row-start-1 justify-self-end rounded-full border border-neutral-900 bg-[#F9FFEA] px-3 py-2 text-xs font-bold uppercase sm:px-6 sm:text-sm lg:col-start-3`}
        >
          Acessar a plataforma
        </Link>
      </div>
    </header>
  );
}
