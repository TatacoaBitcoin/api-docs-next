import Head from "next/head";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docs | API Tatacoa Bitcoin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className={styles.header}>
          <Image
            className={styles.logo}
            src="/logo-s.png"
            alt="logo"
            width={100}
            height={100}
          />
          <h1>Tatacoa Bitcoin API</h1>
        </header>

        <div className={styles.container}>
          <section className={styles.section}>
            <h2>Autenticación</h2>
            <p>
              Todas la peticiones al API de Tatacoa Bitcoin deben autenticarse.
              Para esto se debe enviar en el header{" "}
              <span className={styles.code}>apikey</span> el token de
              autenticación recibido.
            </p>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>Tatacoa Bitcoin 2022</footer>
    </div>
  );
}
