var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var messages = [{ text: "some text", owner: "Tim" }, { text: "other message", owner: "Jane" }];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var api = express.Router();

api.get('/messages', (req, res) => {
    console.log('--get message--');
    res.json(messages);
});

api.post('/messages', (req, res) => {
    console.log('--post message--');
    messages.push(req.body);
    res.json(req.body);
});

app.use('/api', api);

app.listen(63145);