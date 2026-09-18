"use strict";

/**
 * Tiny page i18n helper.
 * Language comes from <html lang="..."> (set by Material / mkdocs-static-i18n).
 * Tables: { key: { ru: "...", en: "...", ... } }, placeholders {0}, {1}, ...
 */
function pageI18n(table, fallback) {
  const lang = (document.documentElement.lang || fallback || "ru").toLowerCase();
  const fb = fallback || "ru";

  return {
    lang: lang,
    t: function (key) {
      const entry = table[key] || {};
      let s = entry[lang] || entry[fb] || "";
      for (let i = 1; i < arguments.length; i++) {
        s = s.split("{" + (i - 1) + "}").join(arguments[i]);
      }
      return s;
    }
  };
}
