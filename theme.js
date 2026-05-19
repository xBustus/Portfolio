(function applySettingsEarly() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    const fontSize = localStorage.getItem('fontSize');
    if (fontSize) {
        document.documentElement.style.fontSize = `${fontSize}px`;
    }
})();
