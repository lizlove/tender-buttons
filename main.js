const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const mailer   = require("mailer");
require('dotenv').config()

const app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/contactus', function (req, res) {
  console.log(req.body.data, 'THIS IS THE END');
  mailer.send(
    { host:           "smtp.mandrillapp.com"
    , port:           587
    , to:             "hello@tenderbuttons.com"
    , from:           "e@elizabethlovero.com"
    , subject:        "Mandrill knows Javascript!"
    , body:           "This is a test"
    , authentication: "login"
    , username:       process.env.MC_USER
    , password:       process.env.MC_PASS
    }, function(err, res){
      if(err){
        res.render('error', { error: err })
      } else {
        console.log('res', res);
      }
    }
  );
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);

module.exports = app;
