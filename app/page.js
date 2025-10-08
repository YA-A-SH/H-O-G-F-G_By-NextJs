"use client";

import "./Styles/body.css";
import "./Styles/header.css";
import "./Styles/footer.css";
import "./Styles/responsev.css";
import "./App.css";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import AppMain from "./Components/AppMain";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("light");
  const [anim, setAnim] = useState(false);
  function hanldeClick() {
    setOpen(!open);
    setAnim(!anim);
  }
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <AppMain
      mode={mode}
      setMode={setMode}
      hanldeClick={hanldeClick}
      open={open}
      i18n={i18n}
    />
  );
}
