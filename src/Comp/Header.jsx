import { useTranslation } from "react-i18next";

export default function Header({ mode }) {
  const { t } = useTranslation("common");

  return (
    <div className="headMain">
      <div className="logo">
        <div className="hgfDev"></div>
        <h1 className="hgf">H-G-F Gaza</h1>
        <img
          src="/Screenshot 2025-09-25 122241.png"
          alt="Our Logo"
          className={`hogfgLogo ${mode === "dark" ? "darkimg" : "lightimg"}`}
        />
        <div className="startWord">
          <p className="word">{t("Together")}</p>, {t("We-Build-A")}{" "}
          <p className="word">{t("Brighter")}</p> {t("Tomorrow")}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
