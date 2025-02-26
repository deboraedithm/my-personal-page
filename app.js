'use strict';

let switcher = document.querySelector('#theme-toggle');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains("dark-theme")) {
        this.textContent = "☀️"; // Ícone de sol para modo claro
        localStorage.setItem("theme", "dark-theme");
    } else {
        this.textContent = "🌙"; // Ícone de lua para modo escuro
        localStorage.setItem("theme", "light-theme");
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        switcher.textContent = savedTheme === "dark-theme" ? "☀️" : "🌙";
    }
});
    console.log('current class name: '+ className);