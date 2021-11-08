const express = require("express")

const server = express()

server.all("/", (req, res) => {

  res.send('<sub my channel https://m.youtube.com/channel/UC9vqkmaq9FgBLdjBNtQPb4Q"/>')

})

function keepAlive() {

  server.listen(3000, () => {

    console.log("Server is ready.")

  })

}

module.exports = keepAlive

