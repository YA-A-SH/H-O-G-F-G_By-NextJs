import Header from "./Header";
import Body from "./Body";
import Foot from "./Foot";

import { useTranslation } from "react-i18next";
export default function AppMain({ mode, setMode, hanldeClick, open, i18n }) {
  const { t } = useTranslation("common");
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
            <h4>{t("Screen-Mode")}</h4>

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
        <div className="head">
          <Header mode={mode} />
        </div>
        <div className="body">
          <Body mode={mode} />
        </div>
        <div className="foot">
          <Foot mode={mode} />
        </div>

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
