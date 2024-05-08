import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const user1 = {
  username: 'morten_hansen',
  name: 'Morten Hansen',
  email: 'mortenhansen22@gmail.com'
};

const user2 = {
    username: 'jesper_andersen',
    name: 'Jesper Andersn', 
    email: 'jesperbandersen1@gmail.com'
}

const users = {user1, user2}



import express from 'express';
let app = express();

import { renderFile } from 'pug';
import { join } from 'path';

app.set('view engine', 'pug');
app.set('views', join(__dirname, '/views'));

app.get('/', (req, response) => response.render('Users', {users}))

app.listen(8000, () => console.log('Test running'));
