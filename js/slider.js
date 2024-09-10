document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const paginationContainer = document.querySelector('.pagination');
    let currentSlide = 0;

    // Create pagination dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('pagination-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showSlide(index));
        paginationContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.pagination-dot');

    function showSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        // Hide all slides and remove active class from all dots
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
        });
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
        });

        // Show the current slide and active dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        // Move slides container
        const offset = -index * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

        currentSlide = index;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Auto slide
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Initialize first slide
    showSlide(currentSlide);
});
