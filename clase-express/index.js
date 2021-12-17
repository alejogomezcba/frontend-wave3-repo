const express = require('express');

const app = express();

app.get("/home", (req,res) => {
    res.redirect('/error')
})

//app.get("/home", (req,res) => {
//    res.send('Estoy en el home')
//})

app.get("/error", (req,res) => {
    res.send('Página en manteniento')
})

app.listen (8043, ()=> {
console.log('Servidor levantado en puerto 8043');
})