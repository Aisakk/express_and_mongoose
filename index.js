const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./database');

//settings
app.set('port', process.env.PORT ||3000)
app.use(express.json())

//Routes
app.use('/api', require('./routes/routes'))


app.listen(app.get('port'), ()=>{
	console.log(`El servidor esta encendido en el puerto ${app.get('port')}`)
})