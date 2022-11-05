import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <main>
        <p className={styles.devinfoContainer}>
          <span><strong>404</strong>: NOT_FOUND</span>
        </p>
        <a href="https://vercel.link/404">
          <div className={styles.note}>Click here to learn more about this error.</div>
        </a>
      </main>
    </div>
  );
};

export default NotFound;