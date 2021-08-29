const express = require("express")
const router = require("./router")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("view"))
app.use(express.static("upload"))

app.use(router)

app.use((err, req, res, next)=>{
    res.send(`
    ${err.message}
    `)
})

app.listen(3000, ()=>{
    console.log("started server on 3000");
})