const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(cors())
app.use(jsonParser)
app.use(urlencodedParser)

app.get('/', (req, res) => {
    res.json('Website A')
})

app.post('/github-event', (req, res) => {
    if (req.body.secret !== 'secret123') {
        console.log('Wrong Secret')
        return res.status(400).json()
    }
    console.log('Incoming Webhook')
    res.json()
})

app.listen(port, () => {
    console.log(`Running localhost:${port}`)
})

// npm install -g nodemon lalu gunakan nodemon, bukan node
// Gunakan Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted agar dapat menggunakan nodemon pada PowerShell
// Jika sudah, kembalikan dengan Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted pada PowerShell
// Cek pada PowerShell dengan Get-ExecutionPolicy -Scope CurrentUser sampai memunculkan output "Restricted"