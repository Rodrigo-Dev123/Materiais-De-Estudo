require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('pronto');  // Vai emitir um sinal quando conectar à base de dados.  
    })
    .catch(e => console.log(e));


const path = require('path');
const { middlewareGlobal, outroMiddlewar } = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); 

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(outroMiddlewar);
app.use(routes);

app.on('pronto', () => {  // captura este sinal que foi emitido por app e começa escultar na porta 3000.
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor execultando na porta 3000');
    });
})
