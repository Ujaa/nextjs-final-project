"use client";

import Book from "@/components/book";
import useMaxScroll from "@/hooks/useMaxScroll";
import useScroll from "@/hooks/useScroll";
import IBooksResponse from "@/models/responses/books-response";
import { LIST_PATH } from "@/services/api";
import { getJson } from "@/services/service";
import styles from "@/styles/pages/books.module.css";
import { useState } from "react";
import useSWR from "swr";

export default function Books({ params: { id } }) {
  const { data, error, isLoading } = useSWR<IBooksResponse>(
    `${LIST_PATH}?name=${id}`,
    getJson
  );
  const ratio = useScroll();

  if (error) return <div className={styles.error}>Failed to load</div>;
  if (isLoading) return <div className={styles.loading}>Loading</div>;

  return (
    <div className={styles.scrollArea}>
      <div className={styles.world}>
        <div
          className={styles.wrapper}
          style={{
            transform: `rotateY(-10deg) rotateX(25deg) rotateZ(25deg) translateX(${
              ratio * -15 + 280
            }rem)`,
          }}
        >
          <ul className={styles.books}>
            {data.results.books.map((book, index) => {
              return (
                <Book
                  key={index}
                  index={index}
                  rank={book.rank}
                  title={book.title}
                  author={book.author}
                  bookImgPath={book.book_image}
                  buyLinks={book.buy_links}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
