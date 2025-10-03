import "./Styles/body.css";
import "./Styles/header.css";
import "./Styles/footer.css";
import "./Styles/responsev.css";
import "./App.css"
import Header from "./Comp/Header";
import Body from "./Comp/Body";
import Foot from "./Comp/Foot";
import "./i18n/i18n";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("light");
  const [anim, setAnim] = useState(false);
  const { t } = useTranslation("common");
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
    <div className="mainF1">
      <div className={`${mode === "dark" ? "dark" : "light"}`}>
        <div className="settings">
          <button
            className={`toggleBtn ${
              mode === "dark" ? "darkbtnSetting" : "lightbtnSetting"
            }`}
            onClick={hanldeClick}
          >
            ⚙
          </button>
          <div
            className={`theSettings ${open ? "active theSettingsAnimat" : ""} ${
              mode === "dark" ? "darkSetting" : "lightSetting"
            }`}
          >
            <h4 suppressHydrationWarning>{t("Screen-Mode")}</h4>

            <div className="editeBtn">
              <button
                onClick={() => {
                  setMode("light");
                }}
              >
                {t("Light")}
              </button>
              <button
                onClick={() => {
                  setMode("dark");
                }}
              >
                {t("Dark")}
              </button>
            </div>
            <h4>{t("Language")}</h4>
            <div className="editeBtn">
              {" "}
              <button onClick={() => i18n.changeLanguage("ar")}>AR</button>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div>
          </div>
        </div>
        <div className="head"><Header mode={mode} /></div>
        <div className="body"><Body mode={mode} /></div>
        <div className="foot"><Foot mode={mode} /></div>

        <div className="designerNote">
          <p>Designed & Developed by YA.A.SH</p>
          <div className="theDevMedea">
            <a
              href="https://www.facebook.com/yaser.shkfa"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="icon"
              />
            </a>
            <a
              href="https://www.instagram.com/username"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="icon"
              />
            </a>
            <a
              href="https://www.tiktok.com/@username"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/tiktok.png"
                alt="TikTok"
                width={24}
                height={24}
                className="icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
