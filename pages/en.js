import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Hero from "../src/organisms/Hero";

const en = () => {
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
            <h2>Authentication</h2>
            <p>
              Every request to the Tatacoa Bitcoin API must be authenticated.
              For this reason, header must include the provided credentials for{" "}
              <span className={styles.code}>apiid</span> and{" "}
              <span className={styles.code}>apikey</span>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Invoices</h2>

            <h3>Creation</h3>
            <Table bordered size="sm">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route</th>
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
  "amount": 5,
  "currency": "USD",
  "description": "tatacoa bitcoin invoice",
  "webhook": "https://webhook.com"
}
        `}</code>
            </pre>

            <h3>List</h3>
            <Table bordered size="sm">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route</th>
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

            <h3>Details</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route</th>
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

            <h3>Creation</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route</th>
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

            <h3>List</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route</th>
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

            <h3>Details</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route</th>
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

            <h3>Creation</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route</th>
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
  "amount": 10,
  "currency": "USD",
  "description": "tatacoa bitcoin gift"
}
        `}</code>
            </pre>

            <h3>List</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route</th>
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

            <h3>Details</h3>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route</th>
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
};

export default en;
