import styles from "@/styles/components/buy-link.module.css";
import Image, { StaticImageData } from "next/image";

import amazonImg from "../../public/icons/ic_amazon.png";
import appleBooksImg from "../../public/icons/ic_apple_books.png";
import bookshopImg from "../../public/icons/ic_bookshop.jpg";
import indieBoundImg from "../../public/icons/ic_indiebound.png";
import { IBuylink } from "@/models/responses/books-response";
import { BookStoreName } from "./buy-links";
import Link from "next/link";

interface BuyLinkProps {
  buyLink: IBuylink;
}

export default function BuyLink({ buyLink }: BuyLinkProps) {
  const getImageSrc = (name: string): StaticImageData => {
    switch (name) {
      case BookStoreName.Amazon:
        return amazonImg;
      case BookStoreName.AppleBooks:
        return appleBooksImg;
      case BookStoreName.Bookshop:
        return bookshopImg;
      case BookStoreName.IndieBound:
        return indieBoundImg;
    }
  };

  return (
    <Link href={buyLink.url} target="_blank">
      <div className={styles.wrapper}>
        <Image src={getImageSrc(buyLink.name)} alt={buyLink.name} />
      </div>
    </Link>
  );
}
