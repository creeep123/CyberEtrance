import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Layout({ children, home }) {
  const [titleClicked, setClicked] = useState(false);
  const router = useRouter();
  const title = router.query.name ? router.query.name : 'Cyber Entrance';
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <ChakraProvider>
      <Head>
        <title>Cyber Entrance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.content}>
        <header className={styles.header}>
          <div
            className={
              `${titleClicked ? 'animate__animated animate__headShake ' : ''}` +
              styles.hoverWrapper
            }
            onClick={handleClick}
          >
            <div className={styles.cyberTitle}>
              <>{title}</>
            </div>
          </div>
        </header>
        {children}
      </main>
    </ChakraProvider>
  );
}
