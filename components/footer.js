import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.hr} />
      <p>
        Check out my <a>Email</a> · <a>LinkedIn</a>
      </p>
      <p>Gemaakt met React © Reyber - 2022</p>
    </footer>
  );
}
