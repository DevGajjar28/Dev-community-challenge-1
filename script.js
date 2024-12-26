// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Dynamic Snowflake Generation
function createSnowflakes() {
    const container = document.querySelector('.container');
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        const size = Math.random() * 5 + 2;
        const startPosition = Math.random() * window.innerWidth;
        const duration = Math.random() * 3 + 2;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startPosition}px`;
        snowflake.style.opacity = Math.random();
        snowflake.style.animation = `snowfall ${duration}s linear infinite`;

        container.appendChild(snowflake);
    }
}

// Smooth scroll for CTA button
document.querySelector('.cta').addEventListener('click', () => {
    const firstSection = document.querySelector('.section');
    firstSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Initialize snowflakes
window.addEventListener('load', createSnowflakes);

// Image click handler
document.querySelectorAll('.section-image').forEach(img => {
    img.addEventListener('click', function () {
        this.style.transform = this.style.transform === 'scale(1.15)' ? 'scale(1)' : 'scale(1.15)';
    });
});