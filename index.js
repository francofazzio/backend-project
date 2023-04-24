const express = require('express')
const app = express()
const puerto= 8080

app.get('/', (req, res) => { //asi indicas a que ruta queres entrar metodo get
    res.send('Hola soy home') 
})

app.get('/partidos/clubes', (req, res) => { //asi indicas a que ruta queres entrar metodo get
    res.send('Hola soy union') 
})

app.get('/user/:id/:nombre', (req, res) => {
    const{id, nombre} = req.params
    res.send('Hola soy user: ${id} ${nombre}') //para usuario
})


app.listen(puerto, () => {
    console.log('El servidor se inicia en el puerto ${puerto}')
}) // asi se inicia con express un servidor