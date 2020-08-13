// Express is our web application framework
const express = require("express")
// Create the app we'll interface with
const app = express()
// Node utility to help work with the file paths
const path = require("path")
// Define where are public files are
const public = path.join(__dirname, "public")
// Accept an environment variable or default port of 3000
const port = process.env.PORT || 3000

// When you request our server with no special route, return index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(public, "index.html"))
})

// When a resource is requested on our server, make it relative to the public dir
app.use("/", express.static(public))

//Set the app to listen on our port to start accepting requests
app.listen(port, () => {
  console.log(`Hello World app listening at http://localhost:${port}`)
})
