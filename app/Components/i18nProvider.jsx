// components/i18nProvider.jsx

"use client";

import "../i18n/i18n.client"; // استدعاء التهيئة هنا (Client-side)
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function I18nProvider({ children }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // إدارة اللغة والاتجاه على الـ HTML Tag
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return children;
}