const multer = require("multer")

const option = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "upload")
        },
        filename: (req, file, cb)=>{
            var arr = file.originalname.split(".")
            var type = arr[arr.length - 1].toLowerCase()
            const today = Date.now();


            if (type == "jpg" || type == "png" || type == "jpeg" || type == "bmp"|| type == "gif"){
                cb(null, today + "." + type)
            } else{
                cb(new Error("이미지가 아닙니다"))
            }            
        }

    }),
    limits: {fileSize: 100 * 100000},
}

const upload = multer(option)

module.exports = upload