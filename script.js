const fabric = document.querySelector('.singularity-fabric');

// 1. Perlin-like Deterministic Chaos
function animate() {
    const t = performance.now() / 2000;
    const hue = Math.sin(t) * 180 + 180;
    
    fabric.style.setProperty('--hue', hue);
    fabric.style.transform = `rotate3d(1, 1, 1, ${Math.sin(t) * 20}deg) scale(${1 + Math.sin(t) * 0.1})`;
    
    requestAnimationFrame(animate);
}

// 2. Interactive Explosion (The Big Bang)
fabric.addEventListener('click', () => {
    fabric.classList.add('exploded');
    
    setTimeout(() => {
        fabric.classList.remove('exploded');
        // म्यूटेशन: रिबर्थ के बाद नया शेप
        const r = () => Math.floor(Math.random() * 80) + 20;
        fabric.style.borderRadius = `${r()}% ${r()}% ${r()}% ${r()}%`;
    }, 1000);
});

animate();
