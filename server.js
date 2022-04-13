const express = require("express")
const history = require("express-history-api-fallback")

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static("dist"))
app.use(history("index.html", { root: "./dist" }))

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
