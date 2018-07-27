const express = require('express')
const app = express()
const PORT = process.env.PORT || '8000'


/**
 * @api {get} /lol/{name} Prints "Lol {name}"
 * @apiName LolWorld
 * @apiParam (Url) {String} name the name to print
 * @apiSuccess (200) {String} message the hello {name} message
 */
app.get('/lol/:name', (req, res) =>
  res.send({
    message: `Lolssss111 ${req.params.name}`
  })
)

/**
 * @api {get} /hello/{name} Prints "Hello {name}"
 * @apiName HelloWorld
 * @apiParam (Url) {String} name the name to print
 * @apiSuccess (200) {String} message the hello {name} message
 */
app.get('/hello/:name', (req, res) =>
  res.send({
    message: `Hello ${req.params.name}`
  })
)

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
