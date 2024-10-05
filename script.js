const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

// Mostra a imagem atual
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active'); // Remove a classe active de todas as imagens
        if (i === index) {
            img.classList.add('active'); // Adiciona a classe active à imagem atual
        }
    });
}

// Mostra a primeira imagem
showImage(currentIndex);

// Configura o carousel automático
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // Incrementa o índice
    showImage(currentIndex);
}, 3000); // Troca a imagem a cada 3 segundos
