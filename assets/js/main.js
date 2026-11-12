// main.js – core site logic




// Personalization
const correctYear = 2003; // birth‑year passcode
const personName = "Shraddha"; // used for personalized messages (future extensions)

// Utility for fade‑out transition
function fadeOutAndNavigate(target) {
  document.body.classList.add('fade-out');
  setTimeout(() => (location.href = target), 800);
}

/* -------------------------------------------------
   Landing page – clock click
------------------------------------------------- */
const clockBtn = document.getElementById('clockBtn');
if (clockBtn) {
  clockBtn.addEventListener('click', () => fadeOutAndNavigate('year.html'));
}

/* -------------------------------------------------
   Passcode page – birth‑year validation
------------------------------------------------- */
const checkBtn = document.getElementById('check');
if (checkBtn) {
  checkBtn.addEventListener('click', () => {
    const entered = Number(document.getElementById('year').value);
    const msg = document.getElementById('msg');
    if (entered === correctYear) {
      // optional confetti (load library separately if desired)
      if (window.confetti) confetti();
      fadeOutAndNavigate('message.html');
    } else {
      msg.textContent = 'Oops! Wrong year. Try again.';
      const input = document.getElementById('year');
      input.classList.add('shake');
      setTimeout(() => input.classList.remove('shake'), 600);
    }
  });
}

/* -------------------------------------------------
   Message page – download button (simple text card)
------------------------------------------------- */
const dlBtn = document.getElementById('downloadBtn');
if (dlBtn) {
  dlBtn.addEventListener('click', () => {
    const content = `Happy Birthday, ${personName}!\n\nMay your day be filled with love, laughter, and Shin‑chan mischief!`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'birthday-card.txt';
    a.click();
    URL.revokeObjectURL(url);
  });
}

/* -------------------------------------------------
   Optional confetti – include via separate script if needed
------------------------------------------------- */
// To enable confetti, add <script src="assets/js/canvas-confetti.min.js"></script>
// and the library will expose a global `confetti` function.
