import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import express from 'express';
let app = express();

import { renderFile } from 'pug';
import { join } from 'path';

app.set('view engine', 'pug');
app.set('views', join(__dirname, '/spm4'));

app.get('/', (req, response) => response.render('PugExample', valuesForTemplate))

app.listen(8000, () => console.log('Test running'));
