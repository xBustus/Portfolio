
function saveSettings() {
   
    const theme = document.getElementById('themeSelector').value;
    localStorage.setItem('theme', theme);

    const fontSize = document.getElementById('fontSize').value;
    localStorage.setItem('fontSize', fontSize);

  
    const notifications = document.getElementById('notificationsToggle').checked;
    localStorage.setItem('notifications', notifications);

    
    const effects3D = document.getElementById('effectsToggle').checked;
    localStorage.setItem('effects3D', effects3D);

    alert('Suas configurações foram salvas com sucesso');
}


function loadSettings() {
   
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.getElementById('themeSelector').value = savedTheme;
        document.body.classList.toggle('bg-white', savedTheme === 'light');
        document.body.classList.toggle('bg-black', savedTheme === 'dark');
        document.body.classList.toggle('text-white', savedTheme === 'dark');
        document.body.classList.toggle('text-black', savedTheme === 'light');
    }

    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        document.getElementById('fontSize').value = savedFontSize;
        document.body.style.fontSize = `${savedFontSize}px`;
        document.getElementById('fontSizeValue').textContent = `Tamanho da Fonte: ${savedFontSize}px`;
    }

    const savedNotifications = localStorage.getItem('notifications') === 'true';
    document.getElementById('notificationsToggle').checked = savedNotifications;

    
    const savedEffects3D = localStorage.getItem('effects3D') === 'true';
    document.getElementById('effectsToggle').checked = savedEffects3D;
    if (savedEffects3D) {
        document.body.classList.add('transform', 'transition-transform', 'duration-500', 'hover:scale-105');
    }
}

document.getElementById('saveButton').addEventListener('click', saveSettings);


window.onload = loadSettings;


document.getElementById('themeSelector').addEventListener('change', function () {
    if (this.value === 'light') {
        document.body.classList.replace('bg-black', 'bg-white');
        document.body.classList.replace('text-white', 'text-black');
    } else {
        document.body.classList.replace('bg-white', 'bg-black');
        document.body.classList.replace('text-black', 'text-white');
    }
});


document.getElementById('fontSize').addEventListener('input', function () {
    const fontSizeValue = document.getElementById('fontSizeValue');
    document.body.style.fontSize = this.value + "px";
    fontSizeValue.textContent = `Tamanho da Fonte: ${this.value}px`;
});

document.getElementById('notificationsToggle').addEventListener('change', function () {
    if (this.checked) {
        alert("Notificações Ativadas");
    } else {
        alert("Notificações Desativadas");
    }
});

const effectsToggle = document.querySelector('#effectsToggle');
const container = document.querySelector('#splineContainer');

effectsToggle.addEventListener('change', function () {
    if (this.checked) {
        container.innerHTML = `
            <spline-viewer url="https://prod.spline.design/7W1Kt3XwIS-bn20l/scene.splinecode" class="spline-viewer"></spline-viewer>
        `;
    } else {
        container.innerHTML = ''; 
    }
});



