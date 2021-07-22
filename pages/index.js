import styles from '../styles/Home.module.css';
import Card from '../components/card';
import { projects } from './constant.js';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <div className={styles.cardContainer}>
        {projects.map((item) => (
          <Card projectInfo={item}></Card>
        ))}
      </div>
    </Layout>
  );
}
