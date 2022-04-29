import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docs | API Tatacoa Bitcoin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.header}>
          <Image
            className={styles.logo}
            src="/logo-s.png"
            alt="logo"
            width={100}
            height={100}
          />
          <h1>Tatacoa Bitcoin API</h1>
        </div>
      </main>

      <footer className={styles.footer}>Tatacoa Bitcoin 2022</footer>
    </div>
  );
}
