// i18n/i18n.server.js

// 💡 هذا الملف لا يتم استخدامه فعلياً لجلب الترجمة،
// بل لضمان عدم فشل Next.js في إيجاد إعدادات الترجمة الخاصة بالخادم إذا احتاج إليها.
// الحل الفعلي لـ Timeout أصبح يعتمد على فصل الكود.

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import FsBackend from "i18next-fs-backend";
import path from "path";

const isServer = typeof window === "undefined";

if (isServer) {
  i18n
    .use(FsBackend)
    .use(initReactI18next)
    .init({
      // إعدادات مصغرة لبيئة الخادم فقط
      fallbackLng: "en",
      supportedLngs: ["en", "ar"],
      ns: ["common"],
      defaultNS: "common",
      backend: {
        loadPath: path.join(
          process.cwd(),
          "public/locales/{{lng}}/{{ns}}.json"
        ),
      },
      react: { useSuspense: false },
    });
}

export default i18n;
