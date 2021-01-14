const { response } = require('express')
const express = require('express')
const news = require('./modules/news');
const app = express() //create server lo hace aquí
const port = 3000

//middleware
app.use(express.static('public'));//carpeta de archivos estaticos
app.set('view engine', 'pug');//para trabajar con pug
app.set('views','./views');//donde lo guarda


//RUTAS
app.get('/home', news.getHome)

app.get('/QuienesSomos', news.getQuienes)

app.get('/DondeEstamos', news.getDonde)

app.get('/QueHacemos', news.getHacemos)

app.get('/Contacto', news.getContacto)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})