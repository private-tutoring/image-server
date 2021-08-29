const express = require("express")
const upload = require("./multer")
const router = express.Router()
const fs = require("fs")
const userArray = require("./db")

router.get("/", (req, res, next)=>{
    res.send("homepage")
})

router.get("/images", (req, res)=>{
    const imageArray = fs.readdirSync("upload")
    var html = ""
    for (var img of imageArray) {
        html += `<img width="100px" height="100px" src="${img}">`
    }
    res.send(html)
})

router.post("/", upload.single("test"), (req, res)=>{
    res.redirect("/images")
})

router.post("/signup", (req, res, next) => {
    const {email, password} = req.body
   for (const user of userArray) {
       if (email == user.email) {
           res.send("이메일 중복")
           return
       }
   }
})
router.post("/login", (req, res, next) => {})

module.exports = router;