import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/logo-s.png"
        alt="logo"
        width={100}
        height={100}
      />
      <h1>Tatacoa Bitcoin API</h1>
      <div className={styles.links}>
        <Link href="/">
          <a>
            <div>ES</div>
          </a>
        </Link>
        <p>/</p>
        <Link href="/en">
          <a>
            <div>EN</div>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Hero;
