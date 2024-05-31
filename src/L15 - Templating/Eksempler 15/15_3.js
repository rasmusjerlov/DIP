import express from 'express';
import fetch from 'node-fetch';
import { renderFile } from 'pug';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const linkUrl = 'https://randomuser.me/api/?nat=dk&results=100';

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

function hentBrugere() {
    return get(linkUrl);
    
};

app.set('view engine', 'pug');
app.set('views', join(__dirname, '/views'));

app.get('/', async (req, response) => response.render('15_3', await hentBrugere()));


app.listen(6969);