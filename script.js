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

// saiba mais blog.html

function aboutSwitch(current, onClass, offClass) {
    if (current.classList.contains(onClass)) {
        current.classList.remove(onClass); // Oculta o texto
    } else {
        current.classList.add(onClass); // Mostra o elemento com animação
    }
}

document.querySelectorAll('.aboutSwitch').forEach(button => {
    button.addEventListener("click", function () {
        const current = this.closest('div').querySelector('.oculto');
        aboutSwitch(current, 'show', 'hidden');
    });
});


// forEach

//for(i = 0; i < document.querySelectorAll('.aboutSwitch').length; i++;) {}