"use client";

import useSWR from "swr";
import styles from "@/styles/pages/home.module.css";
import { getJson } from "@/services/service";
import IBestSellerResponse from "@/models/responses/best-seller-response";
import BestSeller from "@/components/best-seller";
import useScroll from "@/hooks/useScroll";
import { LISTS_PATH } from "@/services/api";
import useMaxScroll from "@/hooks/useMaxScroll";
import { RandomOffSet } from "@/models/random-offset";
import { useEffect, useState } from "react";
import useMouseMove from "@/hooks/useMouseMove";

export default function Home() {
  const { data, error, isLoading } = useSWR<IBestSellerResponse>(
    LISTS_PATH,
    getJson
  );
  const ratio = useScroll();
  const [_, setMaxScroll] = useMaxScroll();
  const mousePosition = useMouseMove();
  const [randomOffsets, setRandomOffsets] = useState<RandomOffSet[]>([]);

  useEffect(() => {
    const offsets: RandomOffSet[] = [];
    if (!isLoading) {
      for (let i = 0; i < data.results.length; i++) {
        offsets.push({
          x: Math.random() * (5 - -5) - 5,
          y: Math.random() * (5 - -5) - 5,
        });
      }
      setRandomOffsets(offsets);
    }
  }, [isLoading]);

  if (error) return <div className={styles.test}>Failed to load</div>;
  if (isLoading) return <div className={styles.test}>Loading...</div>;

  return (
    <div className={styles.scrollArea}>
      <div className={styles.world}>
        <div
          className={styles.stage}
          style={{
            transform: `rotateX(${mousePosition.y * 2}deg) 
            rotateY(${mousePosition.x * 2}deg)`,
          }}
        >
          <div
            className={styles.list}
            style={{ transform: `translateZ(${ratio * 1000 - 100}vw)` }}
          >
            {data.results.map((bestSeller, index) => (
              <BestSeller
                key={index}
                index={index}
                id={bestSeller.list_name_encoded}
                text={bestSeller.display_name}
                random={randomOffsets[index] ?? null}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
