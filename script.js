const welcomeHeader = document.querySelector('h1');

// Adding an even listener
welcomeHeader.addEventListener('click', () => {
    welcomeHeader.textContent = "Hello, I'm a Developer!";
    welcomeHeader.style.color = "blue";
});