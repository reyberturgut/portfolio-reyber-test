import { Footer } from '../../components/footer';
import { Navigatie } from '../../components/navigatie';
import styles from '../../styles/containers.module.css';

export default () => {
  return (
    <>
      <Navigatie />
      <h1> De coolste project ever </h1>
      <p> het begon allemaal in 1984 toen ... </p>
      <main className={styles.container}>
        <Footer />
      </main>
    </>
  );
};
