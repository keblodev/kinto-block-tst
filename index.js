const express = require('express')
const app = express()
const PORT = process.env.PORT || '5020'


/**
 * @api {get} /lol/{name} Prints "Lol {name}"
 * @apiName LolWorld
 * @apiParam (Url) {String} name the name to print
 * @apiSuccess (200) {String} message the hello {name} message
 */
app.get('/lol/:name', (req, res) =>
  res.send({
    message: `Lolssss33323123 ${req.params.name}`
  })
)

/**
 * @api {get} /hello/{name} Prints "Hello {name}"
 * @apiName HelloWorld
 * @apiParam (Url) {String} name the name to print
 * @apiSuccess (200) {String} message the hello {name} message
 */
app.get('/sample/:name', (req, res) => {
  console.log("LOL!");
  // res.set('Content-Type','application/json');
  // res.set('Cache-Control','max-age=90');
  return res.send({
    message: `Hello11 ${req.params.name}`,
    resHead: res.getHeaders()
  })
}
)

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
