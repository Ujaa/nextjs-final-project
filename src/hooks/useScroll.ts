"use client";

import { useState, useEffect } from "react";
import useMaxScroll from "./useMaxScroll";

// 스크롤 가능한 영역에서 스크롤 위치를 (0~1)사이로 나타낸다

const useScroll = () => {
  const [scrollRatio, setScrollRatio] = useState(0);
  const [maxScroll] = useMaxScroll();

  const handleScroll = () => {
    console.log("[test] scrollRatio:", window.scrollY / maxScroll);
    setScrollRatio(window.scrollY / maxScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollRatio;
};

export default useScroll;
