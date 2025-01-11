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

// Show sales pop-up after a delay
setTimeout(() => {
  const salesPop = document.getElementById('sales-pop');
  salesPop.style.opacity = '1';
  salesPop.style.transform = 'translateY(0)';
}, 2000); // Delay pop-up by 2 seconds

// Close the pop-up
function closeSalesPop() {
  const salesPop = document.getElementById('sales-pop');
  salesPop.style.transform = 'translateY(100%)';
  salesPop.style.opacity = '0';
  setTimeout(() => {
    salesPop.style.display = 'none';
  }, 500); // Wait for animation to complete
}

// Optional: Re-show pop-up on user inactivity
let inactivityTimer;
function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    const salesPop = document.getElementById('sales-pop');
    if (salesPop.style.display !== 'block') {
      salesPop.style.display = 'block';
      salesPop.style.opacity = '1';
      salesPop.style.transform = 'translateY(0)';
    }
  }, 30000); // Show pop-up again after 30 seconds of inactivity
}

document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);

// Toggle Description Visibility
function toggleDescription(button) {
  const description = button.previousElementSibling;
  if (description.style.display === "none" || description.style.display === "") {
    description.style.display = "block";
    button.textContent = "הסתר פרטים";
  } else {
    description.style.display = "none";
    button.textContent = "הצג פרטים";
  }
}
