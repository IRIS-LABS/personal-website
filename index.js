// script.js
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        const scrollPosition = window.scrollY;
        const sectionOffset = section.offsetTop;

        if (scrollPosition > sectionOffset - window.innerHeight / 2) {
            section.classList.add('active');
        }
    });
});
