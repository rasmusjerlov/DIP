// Tilføj kode for opgave 4.1 - 4.5 her!

//Opgave 4.1
let paraArray = document.querySelectorAll('p')
for (let i = 0; i < paraArray.length; i++) {
    paraArray[i].style.color="red"
}

//Opgave 4.2
let paraArray2 = document.querySelectorAll('p')
for (let p of document.querySelectorAll('p:nth-child(odd)')) {
    p.style.color='brown';
}
for (let p of document.querySelectorAll('ul:nth-child(odd)')) {
    p.style.color='brown';
}

//Opgave 4.3
for (let p of document.querySelectorAll('li:nth-child(odd)')) {
    p.style.backgroundColor = "lightgrey"
}

//Opgave 4.4
let headerArray = document.querySelectorAll('h1')
for (let i = 0; i < headerArray.length; i++) {
    let h2 = document.createElement('h2')
    h2.innerText = headerArray[i].nextElementSibling.innerText
    headerArray[i].nextElementSibling.replaceWith(h2)
}

//Opgave 4.5
let headings = document.querySelectorAll('h1');

let linkContainer = document.createElement('div');
linkContainer.id = 'navigation-links';

for (let heading of headings) {
    let index = headings.indexOf(heading) + 1; // Get the index of the current heading
    if (!heading.hasAttribute('id')) {
        let id = `heading-${index}`;
        heading.setAttribute('id', id);
        let link = document.createElement('a');
        link.href = `#${id}`;
        link.textContent = 'Link ' + index;
        linkContainer.appendChild(link);
  }
}

document.body.insertBefore(linkContainer, document.body.firstChild);


