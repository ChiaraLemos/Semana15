// Textos para el carrusel
const carouselTexts = [
    "Suspendisse potenti interdum imperdiet neque.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Phasellus eleifend semper tempor."
];

let currentIndex = 0;

// Función para actualizar el texto del carrusel
function updateCarousel() {
    const carouselTextElement = document.getElementById("carousel-text");
    carouselTextElement.textContent = carouselTexts[currentIndex];
    currentIndex = (currentIndex + 1) % carouselTexts.length; // Cicla los textos
}

// Actualiza el carrusel cada 2 segundos
setInterval(updateCarousel, 2000);
updateCarousel(); // Inicializa el carrusel
