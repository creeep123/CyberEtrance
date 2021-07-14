import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ChakraProvider } from '@chakra-ui/react';
import Card from '../components/card';

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>Cyber Entrance</title>
      </Head>
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.cyberTitle}>Cyber Entrance</div>
        </header>
        <div className={styles.cardContainer}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </main>
    </ChakraProvider>
  );
}
