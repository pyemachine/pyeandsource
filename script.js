const wordmark = document.getElementById('wordmark');
const tagline  = document.getElementById('tagline');

// --- Letter drop for title ---
const titleText = 'PYE & SOURCE';
const ampIndex  = titleText.indexOf('&');

titleText.split('').forEach((char, i) => {
  const span = document.createElement('span');
  span.classList.add('drop');
  if (i === ampIndex) span.classList.add('amp');
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.animationDelay = `${i * 0.07 + 0.1}s`;
  wordmark.appendChild(span);
});

// --- Tagline fades in after title finishes ---
const totalTitleDuration = titleText.length * 0.07 + 0.1 + 0.45;

// "PRODUCT OWNER " plain, "BUILDER" pink
const before = 'PRODUCT OWNER\u00A0';
const pink   = 'BUILDER';

before.split('').forEach((char, i) => {
  const span = document.createElement('span');
  span.classList.add('drop');
  span.textContent = char;
  span.style.animationDelay = `${totalTitleDuration + i * 0.04}s`;
  tagline.appendChild(span);
});

pink.split('').forEach((char, i) => {
  const span = document.createElement('span');
  span.classList.add('drop', 'tagline-pink');
  span.textContent = char;
  span.style.animationDelay = `${totalTitleDuration + before.length * 0.04 + i * 0.04}s`;
  tagline.appendChild(span);
});

// --- Cursor parallax on wordmark ---
let targetX  = window.innerWidth  / 2;
let targetY  = window.innerHeight / 2;
let currentX = targetX;
let currentY = targetY;

document.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animate() {
  currentX += (targetX - currentX) * 0.06;
  currentY += (targetY - currentY) * 0.06;
  const nx = (currentX / window.innerWidth  - 0.5) * 2;
  const ny = (currentY / window.innerHeight - 0.5) * 2;
  wordmark.style.transform = `translate(${nx * 14}px, ${ny * 9}px)`;
  requestAnimationFrame(animate);
}

animate();
