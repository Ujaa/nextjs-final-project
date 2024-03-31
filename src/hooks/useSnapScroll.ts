"use client";

import { useState, useEffect } from "react";
import useMaxScroll from "./useMaxScroll";

// 스크롤 가능한 영역에서 스크롤 위치를 (0~1)사이로 나타낸다

const useSnapScroll = () => {
  const [snapScroll, setsnapScroll] = useState(0);
  const [maxScroll] = useMaxScroll();

  const handleSnapScroll = () => {
    console.log("[test] ", maxScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSnapScroll);

    return () => {
      window.removeEventListener("scroll", handleSnapScroll);
    };
  }, []);

  return snapScroll;
};

export default useSnapScroll;
