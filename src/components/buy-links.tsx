import { IBuylink } from "@/models/responses/books-response";
import styles from "@/styles/components/buy-links.module.css";
import BuyLink from "./buy-link";

export enum BookStoreName {
  Amazon = "Amazon",
  AppleBooks = "Apple Books",
  Bookshop = "Bookshop",
  IndieBound = "IndieBound",
}

interface BuyLinksProps {
  buyLinks: IBuylink[];
}

export default function BuyLinks({ buyLinks }: BuyLinksProps) {
  const filteredBuyLinks = (list: IBuylink[]) =>
    list.filter((buyLink) => {
      return (
        buyLink.url !== "" &&
        Object.values(BookStoreName).includes(buyLink.name as BookStoreName)
      );
    });

  return (
    <div className={styles.wrapper}>
      {filteredBuyLinks(buyLinks).map((buyLink) => {
        return <BuyLink buyLink={buyLink} />;
      })}
    </div>
  );
}
