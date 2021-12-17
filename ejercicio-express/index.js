const express = require('express');

const app = express();

app.get("/", (req,res) => {
    res.send('Hola Mundo')
})

app.listen (8050, ()=> {
console.log('Servidor levantado en puerto 8050');
})