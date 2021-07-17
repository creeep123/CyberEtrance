import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ChakraProvider } from '@chakra-ui/react';
import Card from '../components/card';
import { useState } from 'react';
import { projects } from './constant.js';

export default function Home() {
  // debugger;
  const [titleClicked, setClicked] = useState(false);
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
              <>Cyber Entrance</>
            </div>
          </div>
        </header>
        <div className={styles.cardContainer}>
          {projects.map((item) => (
            <Card projectInfo={item}></Card>
          ))}
        </div>
      </main>
    </ChakraProvider>
  );
}
