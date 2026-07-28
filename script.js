const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(8, 8, 8, 0.9)';
        nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
    } else {
        nav.style.background = 'rgba(8, 8, 8, 0.7)';
        nav.style.boxShadow = 'none';
    }
});
