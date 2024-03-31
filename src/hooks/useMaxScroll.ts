"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";

// 스크롤 가능한 영역(전체 문서 길이 - 화면 사이즈)을 계산한다

const useMaxScroll = (): [number, Dispatch<SetStateAction<number>>] => {
  const [maxScroll, setMaxScroll] = useState<number>(4000);

  const handleResize = () => {
    setMaxScroll(document.body.offsetHeight - window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [maxScroll, setMaxScroll];
};

export default useMaxScroll;
