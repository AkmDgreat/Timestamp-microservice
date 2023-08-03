var express = require("express")
var app = express()
const router = require("./Router/route")

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors")
app.use(cors({ optionsSuccessStatus: 200 })) // some legacy browsers choke on 204

app.use(express.static("public"))

app.use(express.json())
app.use(router)

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html")
})

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" })
})

var listener = app.listen(process.env.PORT || 5000, function () {
  //CHANGES MADE
  console.log("Your app is listening on port " + listener.address().port)
})
