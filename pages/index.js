import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Projectkaart } from '../components/projectkaart';
import { Verhaalkaart } from '../components/verhaalkaart';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>Hi, ik ben Reyber. Hogeschooldocent bij de opleiding CMD</h1>
        <section className={styles.cardContainer}>
          <Projectkaart
            titel="Lely Nederland"
            beschrijving="development"
            Plaatje={AccessibilityPlaatje}
            paginaUrl="/projecten/ikea"
          />

          <Projectkaart
            titel="Lely Nederland"
            beschrijving="development"
            Plaatje={AccessibilityPlaatje}
            paginaUrl="/projecten/ikea"
          />

          <Verhaalkaart>
            <h2> accessibility first </h2>
            <p> meer over de accessibility </p>
            <img src="https://i.postimg.cc/sXJbNZSM/Screenshot-2022-05-03-at-14-54-14.png" />
            <figcaption> foto van mobile devices die AR showcasen </figcaption>
          </Verhaalkaart>
        </section>
      </main>

      <Footer />
    </>
  );
};
