// Restart the scan card animation in a loop so it keeps feeling alive
const scanCard = document.getElementById('scanCard');
const scanRows = document.querySelectorAll('.scan-row');

function restartScanAnimation() {
  scanRows.forEach(row => {
    row.style.animation = 'none';
    row.offsetHeight; // reflow to reset
    row.style.animation = null;
  });
}

setInterval(restartScanAnimation, 6000);

// Smooth nav highlight on scroll (lightweight, no dependencies)
const navLinks = document.querySelectorAll('.nav-links a');
const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 120;
  sections.forEach((section, i) => {
    if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(l => l.style.opacity = '0.75');
      navLinks[i].style.opacity = '1';
    }
  });
}, { passive: true });
