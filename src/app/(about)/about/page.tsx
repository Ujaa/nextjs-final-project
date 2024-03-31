import { Metadata } from "next";
import styles from "@/styles/pages/about.module.css";

export const metadata: Metadata = {
  title: "about",
};

export default function About() {
  const text =
    "Welcome to the official explorer for The New York times Best Seller list explorer.".repeat(
      4
    );
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Welcome to the official explorer
        <br />
        for The New York times Best Seller list explorer.
        <br />
        We hope you enjoy your stay!
      </h1>

      <div className={styles.decorationWrapper}>
        <p className={`${styles.decoration} ${styles.animateText}`}>
          {text.split(" ").join("")}
        </p>
      </div>
      <div className={styles.decorationWrapper}>
        <p className={`${styles.decoration} ${styles.animateTextReversed}`}>
          {text.split(" ").reverse().join("")}
        </p>
      </div>
    </div>
  );
}
