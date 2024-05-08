// app.js
import express from 'express';
const app = express();
import sessions from 'express-session';
import pug from 'pug';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
app.set('view engine', 'pug');
app.set("views", __dirname + "/views");

app.use(sessions({ secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000*60*20 }, resave: false }));
app.use(express.static(__dirname + '/filer'));
//app.use(express.static(__dirname));
app.use(express.json());
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

const products = [
    {name : 'Velo Freeze', price : '45kr', strength : '12mg', id : '1'}, 
    {name : 'Velo Mint', price : '40kr' , strength : '9 mg', id : '2'}, 
    {name : 'Velo Blueberry Freeze', price : '39kr', strength : '9 mg', id : '3'}
]


app.get('/index', (request, response) => {
    response.render('index', {products} );

});

app.post('/orders', (request, response) => {
    let {id} = request.body;
    let {name} = request.body;
    let {price} = request.body;
    let order = {id, name, price};
    const orders = []
    
    response.render('orders', {orders});
    orders.push(order)
    console.log(orders);
    
});


app.listen(8000);

console.log('Lytter på port 8000 ...');