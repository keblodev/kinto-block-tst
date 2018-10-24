const express = require('express')
const app = express()
const PORT = process.env.PORT || '8000'


/**
 * 
 * @api {get} /sample/{message} hello world sample request
 * @apiName GetSample
 * @apiParam (Url) {String} message the message to return
 * @apiSuccess (200) {Object} message
 */
app.get('/sample/:message', (req, res) => {
  
  
  console.log(JSON.stringify({"kinto_request_id": req.headers["kinto-request-id"], "message": "looooolll", ver: "STRINGIFY"}));
  
  console.log({"kinto_request_id": req.headers["kinto-request-id"], "message": "looooolll", "ver": "NOSTRINGIFY"});
  
  console.log(`{"kinto_request_id":"${req.headers["kinto-request-id"]}","message":"looooolll","ver":"FAKEOBJ"}`);  
  
  res.set('Content-Type','application/json');
  res.set('Cache-Control','max-age=90');
  return res.send({
    data: 'Hello World ' + JSON.stringify(process.env),
    output: [req.params.message, JSON.stringify(res.headers)].join('|'),
    lol: 'some-stuff ' + process.env["SOME_WAK_VAR"],
    somewak: 'waak',
    headrsSet: res.getHeaders()
  });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
