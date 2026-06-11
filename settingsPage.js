document.addEventListener("DOMContentLoaded", function () {
  const fontSizeInput = document.getElementById("fontSize");
  const fontSizeValue = document.getElementById("fontSizeValue");
  const saveButton = document.getElementById("saveButton");
  const themeSeg = document.getElementById("themeSeg");
  const langSeg = document.getElementById("langSeg");

  const t = (key) => (window.I18N ? window.I18N.t(key) : key);

  function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  /* ----- theme segment ----- */
  function syncThemeSeg() {
    const theme = document.documentElement.getAttribute("data-theme") || "dark";
    themeSeg.querySelectorAll("[data-theme-opt]").forEach((b) =>
      b.classList.toggle("active", b.getAttribute("data-theme-opt") === theme)
    );
  }
  themeSeg.querySelectorAll("[data-theme-opt]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme-opt");
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      syncThemeSeg();
      showToast(t(theme === "light" ? "toast.theme.light" : "toast.theme.dark"));
    });
  });
  // keep in sync if theme is changed via the header toggle
  new MutationObserver(syncThemeSeg).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  syncThemeSeg();

  /* ----- language segment ----- */
  langSeg.querySelectorAll("[data-lang-opt]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-opt");
      window.I18N && window.I18N.setLang(lang);
      showToast(t("toast.lang"));
    });
  });

  /* ----- font size ----- */
  function applyFontSize(size) {
    document.documentElement.style.fontSize = `${size}px`;
    if (fontSizeValue) fontSizeValue.textContent = `${size}px`;
  }
  const savedFontSize = localStorage.getItem("fontSize") || "16";
  fontSizeInput.value = savedFontSize;
  applyFontSize(savedFontSize);

  fontSizeInput.addEventListener("input", function () {
    applyFontSize(this.value);
  });
  fontSizeInput.addEventListener("change", function () {
    localStorage.setItem("fontSize", this.value);
    showToast(t("toast.font") + this.value + "px");
  });

  /* ----- save ----- */
  saveButton.addEventListener("click", function () {
    localStorage.setItem(
      "theme",
      document.documentElement.getAttribute("data-theme") || "dark"
    );
    localStorage.setItem("fontSize", fontSizeInput.value);
    if (window.I18N) localStorage.setItem("lang", window.I18N.getLang());
    showToast(t("toast.saved"));
  });
});
