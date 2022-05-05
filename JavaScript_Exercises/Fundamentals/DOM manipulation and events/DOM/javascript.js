// your JavaScript file
const container = document.querySelector('#container');

const red = document.createElement('p');
red.classList.add('red');
red.style.color = "red";
red.textContent = "Hey I'm red!";

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.style.color = "blue";
blue.textContent = "I'm a blue h3!";

const content = document.createElement('div');
content.classList.add('content');

const h1_content = document.createElement('h1');
h1_content.classList.add('h1_content');
h1_content.textContent = "I'm in a div";

const p_content = document.createElement('p');
p_content.classList.add('p_content');
p_content.textContent = "ME TOO!";

container.appendChild(red);
container.appendChild(blue);
content.appendChild(h1_content);
content.appendChild(p_content);
container.appendChild(content);