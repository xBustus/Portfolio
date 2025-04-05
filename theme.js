document.addEventListener('DOMContentLoaded', function () {

    function loadSettings() {
        const savedTheme = localStorage.getItem('theme');
        const themeSelector = document.getElementById('themeSelector');
        
        if (savedTheme) {
            document.body.classList.toggle('bg-white', savedTheme === 'light');
            document.body.classList.toggle('bg-black', savedTheme === 'dark');
            document.body.classList.toggle('text-white', savedTheme === 'dark');
            document.body.classList.toggle('text-black', savedTheme === 'light');
        }

        const savedFontSize = localStorage.getItem('fontSize');
        if (savedFontSize) {
            document.body.style.fontSize = `${savedFontSize}px`;
        }

        const savedNotifications = localStorage.getItem('notifications') === 'true';
        const notificationsToggle = document.getElementById('notificationsToggle');
        if (notificationsToggle) {
            notificationsToggle.checked = savedNotifications;
        }

        const savedEffects3D = localStorage.getItem('effects3D') === 'true';
        const effectsToggle = document.getElementById('effectsToggle');
        const splineViewer = document.getElementById('splineViewer');
        if (effectsToggle && splineViewer) {
            effectsToggle.checked = savedEffects3D;
            if (savedEffects3D) {
                splineViewer.classList.add('particle-3d');
            } else {
                splineViewer.classList.remove('particle-3d');
            }
        }
    }

    loadSettings();

    const themeSelector = document.getElementById('themeSelector');
    if (themeSelector) {
        themeSelector.addEventListener('change', function () {
            const theme = this.value;
            localStorage.setItem('theme', theme);
            if (theme === 'light') {
                document.body.classList.add('bg-white', 'text-black');
                document.body.classList.remove('bg-black', 'text-white');
            } else {
                document.body.classList.add('bg-black', 'text-white');
                document.body.classList.remove('bg-white', 'text-black');
            }
        });
    }
});
