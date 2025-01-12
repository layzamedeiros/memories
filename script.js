const carousel = document.getElementById('carousel');
let isDragging = false;
let startX;
let scrollLeft;

// Função para quando o usuário começar a arrastar
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft; // Posição inicial do mouse
    scrollLeft = carousel.scrollLeft; // Posição atual do carrossel
    carousel.style.transition = 'none';
});

// Função para quando o usuário estiver arrastando
carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Se não está arrastando, não faz nada
    e.preventDefault(); // Previne o comportamento padrão (seleção de texto)
    const x = e.pageX - carousel.offsetLeft; // Posição atual do mouse
    const move = (x - startX) * 2; // Calcula o movimento (multiplicado por 2 para tornar mais rápido)
    carousel.scrollLeft = scrollLeft - move; // Atualiza a posição do carrossel
});

// Função para quando o usuário parar de arrastar
carousel.addEventListener('mouseup', () => {
    isDragging = false; // Desativa o estado de arraste
    carousel.style.transition = 'transform 0.5s ease-in-out';
});

// Função para quando o usuário sair da área do carrossel (em caso de drag fora)
carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.style.transition = 'transform 0.5s ease-in-out';

});

// Função para toque (mobile)
carousel.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - carousel.offsetLeft; // Posição inicial do toque
    scrollLeft = carousel.scrollLeft;
});

// Função para movimento de toque (mobile)
carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carousel.offsetLeft; // Posição do toque
    const move = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - move;
});

document.getElementById('play-spotify').addEventListener('click', () => {
    // Para garantir que o iframe de Spotify comece a tocar após um clique do usuário
    const iframe = document.getElementById('spotify-iframe');
    iframe.src = iframe.src; // Isso força o iframe a recarregar e começar a tocar
});

