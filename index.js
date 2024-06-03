const express = require("express")
const app = express()
const port = 3000

app.get('/home', (req, res) =>{
    // res.write('hello world')
    var a = 1
    var b = 2
    var c = a * b + a *b
    return res.send('my name is tuan')
})

app.listen(port, ()=> console.log(`example app listening at localhost: ${port}`))

