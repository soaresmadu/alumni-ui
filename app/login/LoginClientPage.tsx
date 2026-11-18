"use client";

import Link from "next/link";
import { useState } from "react";
import { LandingBanner } from "../components/LandingBanner";
import { blinker, bodoniModa, dmSans } from "../fonts";
import heroStyles from "../styles/HeroSection.module.css";
import styles from "../styles/LoginPage.module.css";

export function LoginClientPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

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
            Menos caos. Mais clareza.<br />
            Um projeto de cada vez.
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
              Entre para organizar prioridades, acompanhar prazos e manter seus projetos em dia.
            </p>
      
            <div className={styles.field}>
              <label htmlFor="login-email">E-mail</label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="nome@example.com"
                required
              />
            </div>
      
            <div className={styles.field}>
              <label htmlFor="login-password">Senha</label>
              <div className={styles.password}>
                <input
                  id="login-password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="digite sua senha"
                  required
                />
                <button
                  type="button"
                  aria-label={passwordVisible ? "Ocultar senha" : "Mostrar senha"}
                  aria-controls="login-password"
                  onClick={() => setPasswordVisible((visible) => !visible)}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="2.5" />
                    {passwordVisible && <path d="m3 3 18 18" />}
                  </svg>
                </button>
              </div>
            </div>
      
            <div className={styles.options}>
              <label className={styles.remember}>
                <input type="checkbox" name="remember" />
                Manter conectado
              </label>
              <button type="button" className={styles.recover} disabled>Recuperar senha</button>
            </div>
      
            <button type="submit" className={styles.submit} disabled>
              Acessar meus projetos
            </button>
      
            <p className={styles.registration}>
              Não possui cadastro?{" "}
              <button type="button" disabled>Registre-se</button>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
