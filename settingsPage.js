document.addEventListener('DOMContentLoaded', function () {
    const themeSelector = document.getElementById('themeSelector');
    const fontSizeInput = document.getElementById('fontSize');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const notificationsToggle = document.getElementById('notificationsToggle');
    const effectsToggle = document.getElementById('effectsToggle');
    const saveButton = document.getElementById('saveButton');
    const splineContainer = document.getElementById('splineContainer');

    function showToast(message) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => toast.classList.remove('show'), 2200);
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    function applyFontSize(size) {
        document.documentElement.style.fontSize = `${size}px`;
        if (fontSizeValue) {
            fontSizeValue.textContent = `Tamanho da Fonte: ${size}px`;
        }
    }

    function applyEffects3D(enabled) {
        if (!splineContainer) return;
        splineContainer.innerHTML = '';
        if (enabled) {
            const viewer = document.createElement('spline-viewer');
            viewer.setAttribute('url', 'https://prod.spline.design/7W1Kt3XwIS-bn20l/scene.splinecode');
            viewer.className = 'particle-3d spline-viewer';
            splineContainer.appendChild(viewer);
        }
    }

    function loadSettings() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        themeSelector.value = savedTheme;
        applyTheme(savedTheme);

        const savedFontSize = localStorage.getItem('fontSize') || '16';
        fontSizeInput.value = savedFontSize;
        applyFontSize(savedFontSize);

        const savedNotifications = localStorage.getItem('notifications') === 'true';
        notificationsToggle.checked = savedNotifications;

        const savedEffects3D = localStorage.getItem('effects3D') === 'true';
        effectsToggle.checked = savedEffects3D;
    }

    themeSelector.addEventListener('change', function () {
        localStorage.setItem('theme', this.value);
        applyTheme(this.value);
        showToast(`Tema alterado para ${this.value === 'light' ? 'claro' : 'escuro'}`);
    });

    fontSizeInput.addEventListener('input', function () {
        applyFontSize(this.value);
    });

    fontSizeInput.addEventListener('change', function () {
        localStorage.setItem('fontSize', this.value);
        showToast(`Tamanho da fonte: ${this.value}px`);
    });

    notificationsToggle.addEventListener('change', function () {
        localStorage.setItem('notifications', this.checked);
        showToast(this.checked ? 'Notificações ativadas' : 'Notificações desativadas');
    });

    effectsToggle.addEventListener('change', function () {
        localStorage.setItem('effects3D', this.checked);
        applyEffects3D(this.checked);
        showToast(this.checked ? 'Efeitos 3D ativados' : 'Efeitos 3D desativados');
    });

    saveButton.addEventListener('click', function () {
        localStorage.setItem('theme', themeSelector.value);
        localStorage.setItem('fontSize', fontSizeInput.value);
        localStorage.setItem('notifications', notificationsToggle.checked);
        localStorage.setItem('effects3D', effectsToggle.checked);
        showToast('Configurações salvas com sucesso');
    });

    loadSettings();
});
