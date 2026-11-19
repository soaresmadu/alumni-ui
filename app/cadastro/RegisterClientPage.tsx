"use client";

import Link from "next/link";
import { LandingBanner } from "../components/LandingBanner";
import { PasswordField } from "../components/PasswordField";
import { blinker, bodoniModa, dmSans } from "../fonts";
import auth from "../styles/LoginPage.module.css";
import hero from "../styles/HeroSection.module.css";
import styles from "../styles/RegisterPage.module.css";

export function RegisterClientPage() {
  return (
    <div className={`${dmSans.className} ${auth.page} ${styles.page}`}>
      <LandingBanner />
      <main className={`${auth.layout} ${styles.layout}`}>
        <div className={`${auth.illustration} ${styles.illustration}`}>
          <Link href="/" className={`${bodoniModa.className} ${auth.brand}`}>
            alumni.
          </Link>

          <div className={`${auth.intro} ${styles.intro}`}>
            <p className={blinker.className}>
              projetos em ordem.<br />
              ideias em movimento.
            </p>
            <p>planeje, acompanhe e faça cada projeto avançar.</p>
          </div>

          <p className={`${auth.label} ${auth.blueLabel} ${styles.blueLabel}`}>
            Organize • Priorize • Entregue
          </p>
          <p className={`${auth.label} ${auth.greenLabel} ${styles.lilacLabel}`}>
            menos caos. mais clareza.<br />
            um projeto de cada vez.
          </p>

          <div className={`${auth.star} ${styles.star}`} aria-hidden="true">
            <span className={hero.star} />
          </div>
          <div className={`${auth.pinkShape} ${styles.greenShape}`} aria-hidden="true" />
          <div className={`${auth.orangeShape} ${styles.yellowShape}`} aria-hidden="true" />
          <div className={`${auth.yellowShape} ${styles.orangeShape}`} aria-hidden="true" />
        </div>

        <div className={`${auth.panel} ${styles.panel}`}>
          <form className={auth.card} method="post" onSubmit={(event) => event.preventDefault()}>
            <p className={auth.eyebrow}>Seu espaço de trabalho</p>
            <h1 className={`${bodoniModa.className} ${auth.heading}`}>bem-vindo(a)</h1>
            <p className={auth.description}>crie sua conta para começar a usar o ALUMNI.</p>

            <div className={auth.field}>
              <label htmlFor="register-email">E-mail</label>
              <input
                id="register-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nome@example.com"
                required
              />
            </div>

            <PasswordField
              id="register-password"
              name="password"
              label="Senha"
              autoComplete="new-password"
              placeholder="digite sua senha"
            />
            <PasswordField
              id="register-confirm-password"
              name="confirmPassword"
              label="Confirmar senha"
              autoComplete="new-password"
              placeholder="confirme sua senha"
            />

            <button type="submit" className={`${auth.submit} ${styles.submit}`} disabled>
              criar conta
            </button>

            <p className={auth.registration}>
              já possui uma conta? <Link href="/login">faça o login</Link>.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
