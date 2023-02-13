const express = require('express')
const Route = require("./route/routes")

const app = express()
app.use(express.json())


app.use('/',Route)

app.listen((process.env.PORT || 3000), function () {
    console.log("express app running on port : " + (process.env.PORT || 3000))
})