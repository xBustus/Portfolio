/* =====================================================================
   UI interactions: mobile menu, theme + language toggles, header scroll
   state, scroll-reveal, and obfuscated email link.
   ===================================================================== */
(function () {
  "use strict";

  /* ----- mobile menu ----- */
  const menuButton = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");
  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    mobileNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ----- theme toggle ----- */
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current =
        document.documentElement.getAttribute("data-theme") || "dark";
      setTheme(current === "dark" ? "light" : "dark");
    });
  });

  /* ----- language toggle ----- */
  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = (window.I18N && window.I18N.getLang()) || "en";
      window.I18N && window.I18N.setLang(current === "en" ? "pt" : "en");
    });
  });

  /* ----- header scroll state ----- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () =>
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----- scroll reveal ----- */
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      reveals.forEach((el) => io.observe(el));
    }
  }

  /* ----- obfuscated email (built at runtime to deter scrapers) ----- */
  function emailAddress() {
    const user = ["i", "d", "5", "8", "6", "1", "7", "3", "b", "i", "e", "l"].join("");
    return user + "@" + "gmail" + "." + "com";
  }
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "mailto:" + emailAddress();
    });
  });
})();
