const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const router = express.Router();

app.use( bodyParser.json() );

let users = [ { username: '@raymondcoplin' } ];

const get = (req, res) => {
    res.json(users);
};

const post = (req, res) => {
    users = [...users, req.body];
    res.json(users);
};

router.get('/', get);
router.post('/', post);

app.use(router);

module.exports = app;