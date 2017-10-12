var express = require('express');
var api = require('./core/api.js');

var app = express();
// API
app.get('/api/status', function(req, res) {
    if (api.getStatus())
        res.status(200).send('ok');
});

/*app.get('/api/refresh', function(req, res) {
    api.refreshList().then(function(r) {
        res.status(200).json(r);
    }).fail(function(err) {
        res.status(503).json(err);
    });
});*/
app.listen(8080);
