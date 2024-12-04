const cube = document.querySelector('.cube');
let timeout;

function handleMouseMove(event) {
    clearTimeout(timeout);

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate rotation based on mouse position
    const rotationY = ((event.clientX / windowWidth) - 0.5) * 360; // Rotation around Y-axis
    const rotationX = ((event.clientY / windowHeight) - 0.5) * -360; // Rotation around X-axis

    cube.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;

    // Reset to animation after no interaction
    timeout = setTimeout(() => {
        cube.style.animation = 'rotate 5s infinite linear';
    }, 2000);
}

// Stop animation on mouse interaction
window.addEventListener('mousemove', (event) => {
    cube.style.animation = 'none';
    handleMouseMove(event);
});

// Touch support for mobile devices
window.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const rotationY = ((touch.clientX / windowWidth) - 0.5) * 360;
    const rotationX = ((touch.clientY / windowHeight) - 0.5) * -360;

    cube.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
});
