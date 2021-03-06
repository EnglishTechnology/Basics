const express = require("express")
const app = express()
const path = require("path")
const public = path.join(__dirname, "public")
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.sendFile(path.join(public, "index.html"))
})

app.use("/", express.static(public))

app.listen(port, () => {
    console.log(`Barbell app listening at http://localhost:${port}`)
})