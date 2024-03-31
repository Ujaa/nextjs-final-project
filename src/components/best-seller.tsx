import { RandomOffSet } from "@/models/random-offset";
import styles from "@/styles/components/best-seller.module.css";
import Link from "next/link";

interface BestSellerProps {
  index: number;
  id: string;
  text: string;
  random?: RandomOffSet;
}

export default function BestSeller({
  index,
  id,
  text,
  random,
}: BestSellerProps) {
  return (
    <section
      key={index}
      className={styles.wall}
      style={{ transform: `translateZ(-${index * 200}vw)` }}
    >
      <Link href={`/lists/${id}`}>
        <div className={styles.wallContent}>
          <h2
            className={styles.wallTitle}
            style={{
              position: "absolute",
              top: random ? random.y * 3 + "vh" : 0,
              left: random ? random.x * 3 + "vw" : 0,
            }}
          >
            {text}
          </h2>
        </div>
      </Link>
    </section>
  );
}
