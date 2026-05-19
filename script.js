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
        current.classList.remove(onClass);
    } else {
        current.classList.add(onClass);
    }
}

document.querySelectorAll('.aboutSwitch').forEach(button => {
    button.addEventListener("click", function () {
        const current = this.closest('div').querySelector('.oculto');
        aboutSwitch(current, 'show', 'hidden');
    });
});

// endlessList
const metas = document.getElementById('metas');

function aboutSwitch2(current, onClass, offClass) {
    if (current.classList.contains(onClass)) {
        current.classList.remove(onClass);
    } else {
        current.classList.add(onClass);
    }
}

document.querySelectorAll('.aboutSwitch2').forEach(button => {
    button.addEventListener("click", function () {
        const current = this.closest('li').querySelector('.oculto');
        aboutSwitch2(current, 'show', 'hidden')
    });
});

// E-mail ofuscado — monta o mailto em runtime para evitar scraping
(function setupEmailLink() {
    const emailLink = document.getElementById('emailLink');
    if (!emailLink) return;
    const user = ['i','d','5','8','6','1','7','3','b','i','e','l'].join('');
    const domain = 'gmail' + '.' + 'com';
    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'mailto:' + user + '@' + domain;
    });
})();
