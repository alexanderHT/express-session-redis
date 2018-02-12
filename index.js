const express = require('express')
, session = require('express-session')
, RedisStore = require('connect-redis')(session)
, cors = require('cors')
, app = express()

app.use(cors())

const options = {
  host: '127.0.0.1',
  port: '6379'
}

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.use(session({
    store: new RedisStore(options),
    secret: 'keyboard cat',
    key: 'x',
    resave: false,
    cookie: { path: '/', secure: false, maxAge: 300000, domain: 'localhost' }
}));

app.get('/login', function (req, res) {
    console.log("a user is login");
    req.session.view = 1
    req.session.login = 1
    req.session.username = 'karim'
    res.send(`welcome to login, your session id is ${req.session.id}`)
})

app.get('/user', function(req, res) {
  if (req.session.login) {
    ++req.session.views;
    res.send( 'session: ' + req.session.id + ' username : ' + req.session.username + ' Viewed <strong>' + req.session.views + '</strong> times.');
  } else {
    res.send(`access denied`)
  }

});


app.listen(3000)
