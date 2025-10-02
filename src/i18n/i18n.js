// i18n/i18n.js

"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend"; // يمكنك استخدام 'Backend' كاسم مستعار إذا أردت
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // إعدادات اللغة والدعم (من إعدادك الأصلي)
    fallbackLng: "en",
    lng: "en",
    supportedLngs: ["en", "ar"],

    // إعدادات النطاق (للتأكد من استخدام ملف common.json)
    ns: ["common"], // اسم ملف الترجمة بدون امتداد (مثلاً common.json)
    defaultNS: "common",

    debug: false,
    interpolation: {
      escapeValue: false, // آمن للاستخدام مع React
    },

    // إعدادات جلب الملفات (من إعدادك الأصلي)
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // المسار في مجلد public
    },
  });

export default i18n;
