"use client";

import { useState, useEffect } from "react";

interface IMousePosition {
  x: number;
  y: number;
}

// 화면 중심(0,0)을 기준으로 마우스의 위치를 (-1, 1)사이 값으로 재계산한다.

const useMouseMove = () => {
  const [mousePosition, setMousePosition] = useState<IMousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: -1 + (event.clientX / window.innerWidth) * 2,
      y: 1 - (event.clientY / window.innerHeight) * 2,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};

export default useMouseMove;
