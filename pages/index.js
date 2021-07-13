import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.header}>
        <main className={styles.cyberTitle}>LINE</main>
      </div>
    </div>
  );
}
