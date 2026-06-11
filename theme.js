/* Applied as early as possible (in <head>, render-blocking) to avoid a
   flash of the wrong theme / font size before the page paints. */
(function applySettingsEarly() {
  const theme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", theme);

  const lang = localStorage.getItem("lang") || "en";
  document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");

  const fontSize = localStorage.getItem("fontSize");
  if (fontSize) {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }
})();
