import Head from "next/head";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import styles from "../styles/Home.module.css";
import Hero from "../src/organisms/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docs | API Tatacoa Bitcoin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Container className="pb-5 px-0 p-sm-5">
          <section className={styles.section}>
            <h2>Autenticación</h2>
            <p>
              Todas la peticiones al API de Tatacoa Bitcoin deben autenticarse.
              Para esto se deben enviar las credenciales recibidas usando los headers{" "}
              <span className={styles.code}>apiid</span> y{" "}
              <span className={styles.code}>apikey</span>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Invoices</h2>

            <h3>Creación</h3>
            <Table bordered size="sm">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Ruta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={styles.code}>POST</span>
                  </td>
                  <td>
                    <span className={styles.code}>/invoices</span>
                  </td>
                </tr>
              </tbody>
            </Table>

            <h4>Payload</h4>
            <pre>
              <code>{`
  {
    "amount": 250,
    "currency": "COP",
    "description": "tatacoa bitcoin invoice",
    "webhook": "https://webhook.com"
  }
          `}</code>
            </pre>

            <h3>Lista</h3>
            <Table bordered size="sm">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Ruta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={styles.code}>GET</span>
                  </td>
                  <td>
                    <span className={styles.code}>/invoices</span>
                  </td>
                </tr>
              </tbody>
            </Table>

            <h3>Detalles</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Ruta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={styles.code}>GET</span>
                  </td>
                  <td>
                    <span className={styles.code}>/invoices/:invoiceId</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>

          <section className={styles.section}>
            <h2>Payments</h2>

            <h3>Creación</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Ruta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={styles.code}>POST</span>
                  </td>
                  <td>
                    <span className={styles.code}>/payments</span>
                  </td>
                </tr>
              </tbody>
            </Table>

            <h4>Payload</h4>
            <pre>
              <code>{`
  {
    "invoice": "lnbc1150n1p3qhh...3pf2gpe3g2usn0qcz49gq6nqwxw"
  }
          `}</code>
            </pre>

            <h3>Lista</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Ruta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={styles.code}>GET</span>
                  </td>
                  <td>
                    <span className={styles.code}>/payments</span>
                  </td>
                </tr>
              </tbody>
            </Table>

            <h3>Detalles</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Ruta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={styles.code}>GET</span>
                  </td>
                  <td>
                    <span className={styles.code}>/payments/:paymentId</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>

          <section className={styles.section}>
            <h2>Gifts</h2>

            <h3>Creación</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Ruta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={styles.code}>POST</span>
                  </td>
                  <td>
                    <span className={styles.code}>/gifts</span>
                  </td>
                </tr>
              </tbody>
            </Table>

            <h4>Payload</h4>
            <pre>
              <code>{`
  {
    "amount": 100,
    "currency": "COP",
    "description": "tatacoa bitcoin gift"
  }
          `}</code>
            </pre>

            <h3>Lista</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Ruta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={styles.code}>GET</span>
                  </td>
                  <td>
                    <span className={styles.code}>/gifts</span>
                  </td>
                </tr>
              </tbody>
            </Table>

            <h3>Detalles</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Ruta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={styles.code}>GET</span>
                  </td>
                  <td>
                    <span className={styles.code}>/gits/:giftId</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
        </Container>
      </main>

      <footer className={styles.footer}>Tatacoa Bitcoin 2022</footer>
    </div>
  );
}
