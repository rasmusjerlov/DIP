import express from 'express';
import fetch from 'node-fetch';

const app = express();
const userUrl = 'https://jsonplaceholder.typicode.com/users/';

app.get('/', async (req, res) => {
    try {
        const response = await fetch(userUrl);
        const users = await response.json();
        let html = '<ul>';
        for (const user of users) {
            html += `<li>${user.name}</li>`;
        }
        html += '</ul>'
        res.send(html);
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        res.status(500).send('Internal server error');
    }
});

app.use((req, res, next) => {
    res.status(404).send('Not found')
});

const port = 6969;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);

});