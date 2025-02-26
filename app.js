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

    document.addEventListener("DOMContentLoaded", function () {
        const textElement = document.getElementById("#typing-text"); // Seleciona o h1 correto
        const text = "Hi, my name is Debs.";
        let i = 0;
    
        function typeEffect() {
            if (i < text.length) {
                textElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeEffect, 100); // Velocidade da digitação
            }
        }
    
        if (textElement) {
            textElement.textContent = ""; // Garante que o texto inicie vazio
            setTimeout(typeEffect, 500); // Pequeno atraso antes de começar
        } else {
            
            console.error("Elemento 'typing-text' não encontrado!");
        }
    });