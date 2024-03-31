"use client";

import useSWR from "swr";
import styles from "@/styles/pages/home.module.css";
import { getJson } from "@/services/service";
import IBestSellerResponse from "@/models/responses/best-seller-response";
import BestSeller from "@/components/best-seller";
import { LISTS_PATH } from "@/services/api";
import { RandomOffSet } from "@/models/random-offset";
import { useEffect, useState } from "react";
import useMouseMove from "@/hooks/useMouseMove";

export default function Home() {
  const { data, error, isLoading } = useSWR<IBestSellerResponse>(
    LISTS_PATH,
    getJson
  );
  const mousePosition = useMouseMove();
  const [randomOffsets, setRandomOffsets] = useState<RandomOffSet[]>([]);

  const [scrollRatio, setScrollRatio] = useState(0);
  const [maxScroll, setMaxScroll] = useState(4000);

  const handleScroll = () => {
    console.log(
      "[test] scrollRatio",
      document.body.offsetHeight - window.innerHeight,
      window.scrollY / maxScroll
    );
    setScrollRatio(window.scrollY / maxScroll);
  };

  const handleResize = () => {
    console.log(
      "[test] useMaxScroll",
      document.body.offsetHeight - window.innerHeight
    );
    setMaxScroll(document.body.offsetHeight - window.innerHeight);
  };

  useEffect(() => {
    const offsets: RandomOffSet[] = [];
    if (!isLoading) {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      for (let i = 0; i < data.results.length; i++) {
        offsets.push({
          x: Math.random() * (5 - -5) - 5,
          y: Math.random() * (5 - -5) - 5,
        });
      }
      setRandomOffsets(offsets);
      console.log(
        "[test] useEffect first",
        document.body.offsetHeight - window.innerHeight
      );
      setMaxScroll(document.body.offsetHeight - window.innerHeight);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoading]);

  if (error) return <div className={styles.error}>Failed to load</div>;
  if (isLoading) return <div className={styles.loading}>Loading</div>;

  return (
    <div
      className={styles.scrollArea}
      style={{ height: `${data.num_results * 200 + 50}vh` }}
    >
      <div className={styles.world}>
        <div
          className={styles.stage}
          style={{
            transform: `rotateX(${mousePosition.y * 2.5}deg) 
            rotateY(${mousePosition.x * 2.5}deg)`,
          }}
        >
          <div
            className={styles.list}
            style={{
              transform: `translateZ(${
                (scrollRatio * maxScroll) / 255 - 50
              }vh)`,
            }}
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
