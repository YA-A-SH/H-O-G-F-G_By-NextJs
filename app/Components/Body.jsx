"use client";

import { useEffect, useState } from "react";
import BodyMain from "./BodyMain";

export default function Body({ mode }) {
  const [loaded, setLoaded] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [projAnimate, setProjAnimate] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function handleScroll2() {
      if (window.scrollY >= 650) {
        setProjAnimate(true);
      }
    }
    window.addEventListener("scroll", handleScroll2);
    return () => window.removeEventListener("scroll", handleScroll2);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 200) {
        setAnimate(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BodyMain
      animate={animate}
      mode={mode}
      loaded={loaded}
      projAnimate={projAnimate}
      index={index}
      setIndex={setIndex}
    />
  );
}
