import Book from "@/components/book";
import IBooksResponse from "@/models/responses/books-response";
import { getBooks } from "@/services/service";
import styles from "@/styles/pages/books.module.css";

export default async function Books({ params: { id } }) {
  const books: IBooksResponse = await getBooks(id);

  return (
    <div className={styles.world}>
      <div className={styles.wrapper}>
        <ul className={styles.books}>
          {books.results.books.map((book, index) => {
            return (
              <Book
                key={index}
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
  );
}
