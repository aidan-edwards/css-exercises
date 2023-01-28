const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'I\'m hungry';
const p = document.createElement('p');
p.classList.add('p');
p.textContent = "Hey, I\'m red";
p.style.color = "Red";
const h3 = document.createElement('h3')
h3.classList.add('h3');
h3.textContent= "I\'m a blue h3";
h3.style.color = "Blue";
const specialDiv = document.createElement('div');
specialDiv.classList.add('specialDiv')
specialDiv.style.border = "solid black;"
specialDiv.style.backgroundColor = "Pink";
const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "I\'m in a div";
const divP = document.createElement('p');
divP.classList.add('divP');
divP.textContent = "ME TOO!";




container.appendChild(content);
content.appendChild(p);
content.appendChild(h3);
content.appendChild(specialDiv);
specialDiv.appendChild(h1);
specialDiv.appendChild(divP);
