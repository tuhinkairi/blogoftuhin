const express = require('express')
const path = require('path')
const pug = require('pug')
const app = express()

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'templates'))

app.get('/',(req,res)=>{
    res.render('index.pug')
})
app.post('/',(req,res)=>{
    console.log(req.body)
    res.render('index.pug')
})

app.listen(80,()=>{
    console.log('running')
})