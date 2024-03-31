"use client";

import { IBuylink } from "@/models/responses/books-response";
import styles from "@/styles/components/book.module.css";
import { useState } from "react";
import BuyLinks from "./buy-links";

interface BookProps {
  rank: number;
  title: string;
  author: string;
  bookImgPath: string;
  buyLinks: IBuylink[];
}

export default function Book({
  rank,
  title,
  author,
  bookImgPath,
  buyLinks,
}: BookProps) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <li
      className={styles.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.bookWrapper}>
        <div className={styles.bookPage}>
          <BuyLinks buyLinks={buyLinks} />
        </div>
        <div
          className={styles.bookCover}
          style={{ rotate: `y ${isHover ? -120 : 0}deg` }}
        >
          <div className={styles.bookCoverInside}>
            <div className={styles.author}>{author}</div>
            <div className={styles.title}>{title}</div>
          </div>
          <img src={bookImgPath} className={styles.bookCoverImg} />
        </div>
        <div className={styles.bookSpine}></div>
        <div className={styles.bookRightSide}></div>
        <div className={styles.bookBottomSide}></div>
      </div>
    </li>
  );
}
