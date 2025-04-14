document.querySelector('h1').addEventListener('click', () => {
    document.querySelector('h1').textContent = 'Keltech Solutions - Home';
});

document.querySelector('p').addEventListener('click', () => {
    document.querySelector('p').textContent = 'Innovator | Tech Enthusiast | Online Gamer';
});

document.querySelector('h1').addEventListener('click', () => {
    document.querySelector('header').style.backgroundColor = 'lightblue';
});

document.querySelector('p').addEventListener('click', () => {
    document.querySelector('header').style.fontSize = '24px';
});

document.querySelector('nav ul li a:nth-child(2)').addEventListener('click', () => {
    let aboutUs = document.createElement('div');
    aboutUs.textContent = 'About Us';
    aboutUs.style.backgroundColor = 'lightgreen';
    aboutUs.style.padding = '10px';
    document.querySelector('header').appendChild(aboutUs);
});

document.querySelector('nav ul li a:nth-child(3)').addEventListener('click', () => {
    let contact = document.querySelector('footer');
    contact.remove();
});

document.querySelector('nav ul li a:nth-child(4)').addEventListener('click', () => {
    let linkedin = document.createElement('a');
    linkedin.href = 'https://www.linkedin.com/in/kelvin-irungu-0b1b4a1b8/';
    linkedin.textContent = 'LinkedIn';
    linkedin.style.backgroundColor = 'lightgray';
    linkedin.style.padding = '10px';
    document.querySelector('header').appendChild(linkedin);
});