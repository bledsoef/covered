import Head from 'next/head';
import NavBar from './components/nav';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Covered</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.tl}>Welcome to Covered!</h1>
      <h2 className={styles.tm}>We want to make it easy for you to have the perfect cover letter for every application</h2>
    </div>  )
}
