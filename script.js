// Custom JS for GSAP or additional interactivity
console.log("SO Pilates Studio Website");

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Scroll-To-Top Button Functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.id = 'scroll-to-top';
scrollToTopButton.innerHTML = '⬆️';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/Hide Scroll-To-Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});


document.getElementById("currentYear").textContent = new Date().getFullYear();
