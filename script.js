const menuButton = document.getElementById("menuButton");
      const menu = document.getElementById("menu");

      menuButton.addEventListener("click", () => {
          if (menu.classList.contains("hidden")) {
              menu.classList.remove("hidden");
              setTimeout(() => {
                  menu.classList.remove("-translate-y-5", "opacity-0");
                  menu.classList.add("translate-y-0", "opacity-100");
              }, 10);
          } else {
              menu.classList.add("-translate-y-5", "opacity-0");
              menu.classList.remove("translate-y-0", "opacity-100");
              setTimeout(() => menu.classList.add("hidden"), 300);
          }
      });