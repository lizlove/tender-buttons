const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('serve-favicon');
const mailer   = require("mailer");
require('dotenv').config()

const app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/contactus', function (req, res) {
  console.log(req.body);
  // mailer.send(
  //   { host:           "smtp.mandrillapp.com"
  //   , port:           587
  //   , to:             "customer@anydomain.com"
  //   , from:           "you@yourdomain.com"
  //   , subject:        "Mandrill knows Javascript!"
  //   , body:           req.body
  //   , authentication: "login"
  //   , username:       process.env.MC_USER
  //   , password:       process.env.MC_PASS
  //   }, function(err, res){
  //     if(err){
  //       res.render('error', { error: err })
  //     } else {
  //       console.log(res);
  //     }
  //   }
  // );
});

// Always return the main index.html, so react-router renders the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);

module.exports = app;
