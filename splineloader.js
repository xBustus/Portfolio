document.addEventListener('DOMContentLoaded', function () {
    const splineContainer = document.getElementById('splineContainer');
    const savedEffects3D = localStorage.getItem('effects3D') === 'true';

    if (savedEffects3D) {
        const viewer = document.createElement('spline-viewer');
        viewer.setAttribute('url', 'https://prod.spline.design/7W1Kt3XwIS-bn20l/scene.splinecode');
        viewer.className = 'particle-3d spline-viewer';
        splineContainer.appendChild(viewer);
    }
});
