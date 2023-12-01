import express from "express"
import cors from "cors"
import fetch from "node-fetch"
import bodyParser from "body-parser"

const app = express()
const port = 3002

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(cors())
app.use(jsonParser)
app.use(urlencodedParser)

app.get('/trigger-webhook-event-a', async (req, res) => {
    try {
        const data = {
            secret: "secret123",
            event: "event-a",
        }

        const response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        })

        // return success
        res.json('event success')
    } catch (error) {
        console.log(error)
    }
})

app.get('/trigger-webhook-event-b', async (req, res) => {
    try {
        const data = {
            secret: "secret123",
            event: "event-b",
        }

        const response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        })

        console.log('response', response)

        // return success
        res.json('event success')
    } catch (error) {
        console.log(error)
    }
})


app.listen(port, () => {
    console.log(`Running localhost:${port}`)
})

// npm install -g nodemon lalu gunakan nodemon, bukan node
// Gunakan Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted agar dapat menggunakan nodemon pada PowerShell
// Jika sudah, kembalikan dengan Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted pada PowerShell
// Cek pada PowerShell dengan Get-ExecutionPolicy -Scope CurrentUser sampai memunculkan output "Restricted"