const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function updateSlides() {
  heroSlides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
}

function autoPlaySlides() {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  updateSlides();
}

if (heroSlides.length > 0) {
  updateSlides();
  setInterval(autoPlaySlides, 5000);
}

const testimonialCards = document.querySelectorAll('.testimonial');
if (testimonialCards.length > 0) {
  let activeIndex = 0;
  testimonialCards[activeIndex].style.opacity = '1';
  setInterval(() => {
    testimonialCards.forEach((card, idx) => {
      card.style.opacity = idx === activeIndex ? '1' : '0.35';
    });
    activeIndex = (activeIndex + 1) % testimonialCards.length;
  }, 4000);
}

const newsletterForm = document.querySelector('.newsletter form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailField = newsletterForm.querySelector("input[type='email']");
    if (emailField && emailField.value.trim()) {
      alert(`Vanakkam! We'll reach you soon at ${emailField.value.trim()}`);
      emailField.value = '';
    }
  });
}
