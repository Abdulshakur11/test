const express = require("express")
const app = express()

app.use(express.json())
app.use(require('./routes'))

app.listen(9000, () => console.log("port working stable on port 9000"))