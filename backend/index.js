
let express = require("express")

let app = express()
let userController = require("./src/controllers/user.controller")
let dataController = require("./src/controllers/data.controller")
let connect = require("./src/config/db")

let upload = require("./src/middlewares/upload")
let Port = 8080 
app.use(express.json())

app.use("/user",userController)
app.use("/store",upload.single("file"),dataController)

app.listen(Port,async ()=>{
    console.log(`server is running on port 8080`)
connect()
})