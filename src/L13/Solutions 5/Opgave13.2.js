//const beskedUrl = 'http://localhost:8000/beskeder/';
// const soegbeskedUrl = 'https://localhost:44367/api/SoegBeskeder/';
// const rumUrl = 'https://localhost:44367/api/chatRum/';

const beskedUrl = 'http://localhost:6969/beskeder';
const soegbeskedUrl = 'http://localhost:6969/beskeder/';
const rumUrl = 'http://localhost:6969/beskeder/Rum1';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.text();
}
async function deLete(url) {
    let respons = await fetch(url, {
        method: "DELETE"
    });
    if (respons.status !== 204) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function getAlleBeskeder() {
    let beskeder;
    try {
        beskeder = await get(beskedUrl);
    } catch (fejl) {
        console.log(fejl);
    }
    console.log(beskeder);
}
async function soegBeskeder(rum) {
    let beskeder;
    try {
        beskeder = await get(soegbeskedUrl + rum);
    } catch (fejl) {
        console.log(fejl);
    }
    console.log(beskeder);
    return beskeder;
}

async function getRum() {
    let rum;
    try {
        rum = await get(rumUrl);
    } catch (fejl) {
        console.log(fejl);
    }
    console.log(rum);
    return rum;
}

async function postBesked(tekst, chatrum) {
    let besked = {tekst: tekst, chatRum: chatrum };
    try {
        let respons = await post(beskedUrl, besked);
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
}

async function deleteBesked(id) {
    try {
        let respons = await deLete(beskedUrl + id);
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
}


async function visBeskederForRum(rum) {
    let beskederDiv = document.querySelector("#beskeder");
    beskederDiv.innerHTML = ""; 

    let beskeder = await soegBeskeder(rum);
    let table = document.createElement('table');
    table.setAttribute("border", "1");
    createRow(table, 'ID', 'Tekst', 'ChatRum');
    for (let besked of beskeder) {
        createRow(table, besked.id, besked.tekst, besked.chatRum);
    }
    beskederDiv.appendChild(table);
}

function createRow(table, id, tekst, chatRum) {
   const row = document.createElement('tr');
   const idCell = document.createElement('td');
   const tekstCell = document.createElement('td');
   const chatRumCell = document.createElement('td');

   idCell.textContent = id;
   tekstCell.textContent = tekst;
   chatRumCell.textContent = chatRum;

   row.appendChild(idCell);
   row.appendChild(tekstCell);
   row.appendChild(chatRumCell);

   table.appendChild(row);
   
}

function opretBesked(){
    let tekst = document.querySelector("#tekst").value;
    let chatrum = document.querySelector('#chatrum').value;
    postBesked(tekst, chatrum)
}
function sletBesked(){
    let id = document.querySelector("#id").value;
    deleteBesked(id)
}