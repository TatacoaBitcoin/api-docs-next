import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tatacoa Bitcoin API</title>
        <meta name="description" content="Tatacoa Bitcoin API Documentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Tatacoa Bitcoin API</h1>

        <p>Hello World</p>
      </main>

      <footer>Tatacoa Bitcoin 2022</footer>
    </div>
  );
}
