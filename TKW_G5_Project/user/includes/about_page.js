
//================= script cho slider giơí thiệu thành viên
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let interval;

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to move to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to start the automatic sliding
function startSliding() {
    interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Function to stop the automatic sliding
function stopSliding() {
    clearInterval(interval);
}

// Start sliding when the page loads
startSliding();

// Add event listeners to stop sliding on mouseenter and start again on mouseleave
slider.addEventListener('mouseenter', stopSliding);
slider.addEventListener('mouseleave', startSliding);
