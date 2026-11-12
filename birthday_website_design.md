# Birthday Website Design & Flow

## Overview
Create a playful, developer‑themed birthday website for your girlfriend who loves **Shin‑chan**. The site will have a sequence of interactive pages that act like a small puzzle:

1. **Landing Page – "Theatre"**
   - Full‑screen background image of a theater stage (you can use a royalty‑free theater photo or a custom illustration).
   - In the centre, a large analog clock graphic set to **12:00**.
   - Clicking the clock (or a button beneath it) triggers a smooth transition to the next page.

2. **Passcode Page – "Birth‑Year Gate"**
   - A simple form asking the visitor to **enter the birth year** (e.g., `1998`).
   - The correct year unlocks the next page; an incorrect entry shows a friendly error message.
   - Use a subtle animation (e.g., shaking the input) to keep the experience fun.

3. **Message Page – "Shin‑chan Celebration"**
   - Show a collage of **Shin‑chan images** (make sure they are either your own creations or properly licensed). 
   - Overlay a heartfelt birthday message in a developer‑styled font (e.g., **Source Code Pro**).
   - Add a button to **download a personalized image** or **share on social media**.

### Optional Extras
- **Background music** (a short, upbeat tune).
- **Confetti animation** when the passcode is correct.
- A hidden Easter‑egg: press `Ctrl+Alt+B` to reveal a secret “debug console” that prints a cute JavaScript log.

---

## File Structure
```text
birthday-site/
│
├─ index.html            # Landing page – theatre + clock
├─ year.html             # Passcode page – birth‑year input
├─ message.html          # Final greeting page with Shin‑chan pics
├─ assets/
│   ├─ css/
│   │   └─ style.css     # Global styles & animations
│   ├─ img/
│   │   ├─ theater.jpg   # Background image (royalty‑free)
│   │   ├─ clock.svg     # Clock graphic (12:00)
│   │   └─ shin-*.png    # Shin‑chan pictures (placeholder names)
│   └─ js/
│       ├─ main.js        # Navigation logic
│       └─ confetti.js    # Optional confetti library
└─ README.md             # Setup instructions
```

---

## Core Technologies
- **HTML5** – semantic structure.
- **CSS3** – Grid/Flex layout, transitions, `@keyframes` for animations.
- **JavaScript (ES6+)** – page navigation, passcode validation, dynamic effects.
- **Optional libraries**:
  - **[canvas‑confetti](https://www.npmjs.com/package/canvas-confetti)** for the confetti burst.
  - **[howler.js](https://howlerjs.com/)** for simple audio playback.

---

## Sample Snippets
### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Happy Birthday!</title>
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body class="theatre">
  <div class="clock-container" id="clockBtn">
    <img src="assets/img/clock.svg" alt="Clock set to 12" class="clock" />
  </div>
  <script src="assets/js/main.js"></script>
</body>
</html>
```
### `assets/js/main.js`
```js
document.getElementById('clockBtn').addEventListener('click', () => {
  // simple fade‑out then navigate
  document.body.classList.add('fade-out');
  setTimeout(() => location.href = 'year.html', 800);
});
```
### `year.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Enter Birth Year</title>
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body class="gate">
  <h2>Enter the secret passcode 🎂</h2>
  <input type="number" id="year" placeholder="YYYY" />
  <button id="check">Unlock</button>
  <p id="msg" class="error"></p>

  <script src="assets/js/main.js"></script>
</body>
</html>
```
```js
// In main.js – add after the previous snippet
if (document.getElementById('check')) {
  const correct = 1998; // <-- replace with her actual birth year
  document.getElementById('check').addEventListener('click', () => {
    const val = +document.getElementById('year').value;
    const msg = document.getElementById('msg');
    if (val === correct) {
      // optional confetti
      if (window.confetti) confetti();
      location.href = 'message.html';
    } else {
      msg.textContent = 'Oops! Try again.';
      document.getElementById('year').classList.add('shake');
    }
  });
}
```
---

## Design Tips
- **Responsive**: Use `vh/vw` units for the clock so it scales on mobile.
- **Accessibility**: Add `aria‑label` to interactive elements and ensure colour contrast meets WCAG AA.
- **Performance**: Optimize Shin‑chan images (WebP, < 100 KB each) and lazy‑load them on the final page.
- **Licensing**: If you don’t own the Shin‑chan artwork, consider using **fan‑art** you’ve created or a **public‑domain** alternative to avoid copyright issues.

---

## Next Steps for You
1. **Gather assets** – theater background, clock SVG, Shin‑chan pictures (or your own drawings).
2. **Create the folder structure** shown above on your local machine.
3. Copy the sample snippets into their respective files and adjust the birth year constant.
4. Run a local server (e.g., `python -m http.server 8000`) to test.
5. Once satisfied, push to a static‑site host (GitHub Pages, Netlify, Vercel, etc.).

---

## Open Questions
- Do you already have a domain/hosting plan, or would you like recommendations?
- Which exact birth year should be used as the passcode?
- Do you have specific Shin‑chan images ready, or do you need guidance on sourcing/creating them?
- Would you like to add any extra features (music, share buttons, animated confetti, etc.)?

Feel free to answer these, and I can help flesh out the code or set up a quick demo repository for you.