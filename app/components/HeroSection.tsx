import { blinker, dmSans } from "../fonts";
import styles from "../styles/HeroSection.module.css";

export function HeroSection() {
  return (
    <section
      aria-labelledby="landing-title"
      className={`${dmSans.className} ${styles.hero}`}
    >
      <div className={styles.frame}>
        <div className={styles.copy}>
          <h1 id="landing-title" className={`${blinker.className} ${styles.title}`}>
            <span>projetos em ordem.</span>
            <span>ideias em movimento.</span>
          </h1>
          <p className={styles.description}>
            planeje, acompanhe e faça cada projeto avançar. organize suas ideias,
            defina os próximos passos e acompanhe seu progresso, do primeiro
            rascunho à entrega.
          </p>
        </div>

        <div className={styles.artwork}>
          <div className={styles.orangeCircle} aria-hidden="true" />
          <div className={styles.pinkCircle} aria-hidden="true" />
          <span className={`${styles.star} ${styles.goldStar}`} aria-hidden="true" />
          <span className={`${styles.star} ${styles.pinkStar}`} aria-hidden="true" />
          <span className={`${styles.star} ${styles.blueStar}`} aria-hidden="true" />

          <div className={`${styles.label} ${styles.lilacLabel} ${styles.firstLilac}`}>
            ORGANIZE • COLABORE • ENTREGUE
          </div>
          <div className={`${styles.label} ${styles.lilacLabel} ${styles.secondLilac}`}>
            PRIORIZE • ACOMPANHE • AVANCE
          </div>
          <div className={`${styles.label} ${styles.yellowLabel} ${styles.firstYellow}`}>
            MENOS CAOS. MAIS CLAREZA.<br />
            UM PROJETO DE CADA VEZ.
          </div>
          <div className={`${styles.label} ${styles.yellowLabel} ${styles.secondYellow}`}>
            GRANDES IDEIAS COMEÇAM<br />
            COM UM PEQUENO PASSO.
          </div>
        </div>
      </div>
    </section>
  );
}
