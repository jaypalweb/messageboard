var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var app = express();

var messages = [{ text: "some text", owner: "Tim" }, { text: "other message", owner: "Jane" }];
var users = [];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var api = express.Router();
var auth = express.Router();

api.get('/messages', (req, res) => {
    console.log('--get message--');
    res.json(messages);
});

api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user);
    console.log('--get message--');
    res.json(result);
});

api.post('/messages', (req, res) => {
    console.log('--post message--');
    messages.push(req.body);
    res.json(req.body);
});

auth.post('/register', (req, res) => {
    console.log('--register and get token--');
    var index = users.push(req.body) - 1;
    // console.log(index);
    // console.log(users);
    // process.exit();//--equivalent to php die();
    var user = users[index];
    user.id = index;
    var token = jwt.sign(user.id, '123');
    res.json(token);
});

app.use('/api', api);
app.use('/auth', auth);

app.listen(63145);