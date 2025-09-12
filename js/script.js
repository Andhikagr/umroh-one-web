const images = [
  "assets/makkah.jpg",
  "assets/madinah.jpg",
  "assets/taif.jpg",
  // tambah gambar lain
];

let slideIndex = 0;
const slideDiv = document.querySelector(".slide");
const dotsContainer = document.querySelector(".dots");

// buat dots otomatis
images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.onclick = () => currentSlide(i);
  dotsContainer.appendChild(dot);
});

function showSlide(index) {
  if (index >= images.length) slideIndex = 0;
  if (index < 0) slideIndex = images.length - 1;

  slideDiv.style.backgroundImage = `url('${images[slideIndex]}')`;

  // update dots
  const dots = document.querySelectorAll(".dot");
  dots.forEach((d) => d.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

// otomatis setiap 5 detik
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 3000);

// tampilkan slide pertama
showSlide(slideIndex);
