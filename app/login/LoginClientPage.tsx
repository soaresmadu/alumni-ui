"use client";

import Link from "next/link";
import { LandingBanner } from "../components/LandingBanner";
import { PasswordField } from "../components/PasswordField";
import { blinker, bodoniModa, dmSans } from "../fonts";
import heroStyles from "../styles/HeroSection.module.css";
import styles from "../styles/LoginPage.module.css";

export function LoginClientPage() {
  return (
    <div className={`${dmSans.className} ${styles.page}`}>
      <LandingBanner />
      <main className={styles.layout}>
        <div className={styles.illustration}>
          <Link href="/" className={`${bodoniModa.className} ${styles.brand}`}>
            alumni.
          </Link>
          <div className={styles.intro}>
            <p className={blinker.className}>
              projetos em ordem.<br />
              ideias em movimento.
            </p>
            <p>planeje, acompanhe e faça cada projeto avançar.</p>
          </div>

          <p className={`${styles.label} ${styles.blueLabel}`}>
            Organize • Priorize • Entregue
          </p>
          <p className={`${styles.label} ${styles.greenLabel}`}>
            menos caos. mais clareza.<br />
            um projeto de cada vez.
          </p>
          <div className={styles.star} aria-hidden="true">
            <span className={heroStyles.star} />
          </div>
          <div className={styles.pinkShape} aria-hidden="true" />
          <div className={styles.orangeShape} aria-hidden="true" />
          <div className={styles.yellowShape} aria-hidden="true" />
        </div>

        <div className={styles.panel}>
          <form className={styles.card} method="post" onSubmit={(event) => event.preventDefault()}>
            <p className={styles.eyebrow}>Seu espaço de trabalho</p>
            <h1 className={`${bodoniModa.className} ${styles.heading}`}>
              bom ter você<br /> de volta.
            </h1>
            <p className={styles.description}>
              entre para organizar prioridades, acompanhar prazos e manter seus projetos em dia.
            </p>

            <div className={styles.field}>
              <label htmlFor="login-email">e-mail</label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="nome@example.com"
                required
              />
            </div>

            <PasswordField
              id="login-password"
              name="password"
              label="Senha"
              autoComplete="current-password"
              placeholder="digite sua senha"
            />

            <div className={styles.options}>
              <label className={styles.remember}>
                <input type="checkbox" name="remember" />
                manter conectado
              </label>
              <button type="button" className={styles.recover} disabled>recuperar senha</button>
            </div>

            <button type="submit" className={styles.submit} disabled>
              acessar meus projetos
            </button>

            <p className={styles.registration}>
              não possui cadastro?{" "}
              <Link href="/cadastro">registre-se</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
