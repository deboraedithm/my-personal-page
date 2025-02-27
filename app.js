'use strict';

let switcher = document.querySelector('#theme-toggle');

function setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
    switcher.textContent = theme === "dark-theme" ? "☀️" : "🌙";
}

let savedTheme = localStorage.getItem("theme");

if (!savedTheme) {
    // Se não houver tema salvo, pega o do sistema
    savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark-theme" : "light-theme";
}

setTheme(savedTheme);

switcher.addEventListener('click', function() {
    let newTheme = document.body.classList.contains("dark-theme") ? "light-theme" : "dark-theme";
    setTheme(newTheme);
});

console.log('current class name: '+ className);


document.addEventListener("DOMContentLoaded", function() {

    const paragraphs = document.querySelectorAll(".section_paragraph");

    function isInView(element) {
        const rect = element.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150);
    }

    document.addEventListener("scroll", function() {
        paragraphs.forEach(paragraph => {
            if (isInView(paragraph)) {
                paragraph.classList.add("section_paragraph--visible");
            }
        });
    });

    paragraphs.forEach(paragraph => {
        if (isInView(paragraph)) {
            paragraph.classList.add("section_paragraph--visible");
        }
    });
});