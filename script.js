// Scroll suave en el menú
document.querySelectorAll('nav ul li a').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});

// Modal
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Al hacer clic en la imagen
document.querySelectorAll(".clickable-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src; // usa la misma imagen en grande
  });
});

// Cerrar modal con la X
closeBtn.onclick = () => modal.style.display = "none";

const playBtn = document.getElementById('playPodcast');
const audio = document.getElementById('podcastAudio');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️ Pausar Podcast";
  } else {
    audio.pause();
    playBtn.textContent = "🎧 Reproducir Podcast";
  }
});