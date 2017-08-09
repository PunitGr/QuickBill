const path = require("path");
const express = require("express");

const app = express();

app.use('/dist', express.static(__dirname + '/dist'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8000, function () {
    console.log('App listening on port 8000!');
});