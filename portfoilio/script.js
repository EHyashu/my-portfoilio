
// Initialize AOS
AOS.init();

// Typed.js Animation
var typed = new Typed('#element', {
strings: ['Data Science', 'Machine Learning', 'Python', 'DSA', 'CSS', 'HTML'],
typeSpeed: 60,
});

// Popup Script
const popup = document.getElementById('popup');
const popupBtn = document.getElementById('popup-btn');
const closeBtn = document.querySelector('.close-btn');

// Show popup when button is clicked
popupBtn.addEventListener('click', () => {
popup.style.display = 'flex';
});

// Hide popup when close button is clicked
closeBtn.addEventListener('click', () => {
popup.style.display = 'none';
});

// Hide popup when clicking outside the popup content
popup.addEventListener('click', (e) => {
if (e.target === popup) {
popup.style.display = 'none';
}
});