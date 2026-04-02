"use client";
import {useEffect, useState} from "react";

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const verifyWidth = () => {
    if (window.innerWidth < 1220) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };

  const verifyWidthListener = () => {
    verifyWidth();
  };

  useEffect(() => {
    verifyWidth();

    let interval = setInterval(verifyWidth, 1000);

    window.addEventListener("resize", verifyWidthListener);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", verifyWidthListener);
    };
  }, []);

  return {isDesktop};
};
