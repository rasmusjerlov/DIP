//const beskedUrl = 'http://localhost:8000/beskeder/';
// const soegbeskedUrl = 'https://localhost:44367/api/SoegBeskeder/';
// const rumUrl = 'https://localhost:44367/api/chatRum/';
const express = require('express');
const app = express();

const beskedUrl = 'http://localhost:6969/beskeder';
const rumUrl = 'https://beskedserver.azurewebsites.net/api/chatRum/';
const beskeder = [
{tekst: 'Hej abu', id: 1, chatRum: 'Rum3'}, 
{tekst: 'Hej Jens', id: 2, chatRum: 'Rum2'}, 
{tekst: 'Hej Tully', id: 3, chatRum: 'Rum1'}
];
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

async function get(url) {
    const fetch = await fetchModule;
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

app.post('/beskeder', (req, res) => {
    try {
        beskeder.push(req.body)
        res.status(201).send("Virker");
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.get('/beskeder', (request, response) => {
    try {
        response.json(beskeder)
    } catch (error) {
        response.status(500).send(error.toString());
    }
});


app.get('/chatRum', (request, response) => {
    try {
        response.json(rum)
    } catch (error) {
        response.status(500).send(error.toString());
    }
});

app.get('/beskeder/:chatRum',  (request, response) => {
    try {
        const result = [];
        for (const besked of beskeder) {
            if (besked.chatRum == request.params.chatRum) {
                result.push(besked);
            }
        }
        response.json(result);
    } catch (error) {
        response.status(500).send(error.toString());
    }
});

app.listen(6969);
