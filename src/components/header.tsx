"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/styles/components/header.module.css";

export default function Header() {
  const path = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          The New York Times Best Seller Explorer
        </h1>
        <nav className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link href={"/about"}>About</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}
