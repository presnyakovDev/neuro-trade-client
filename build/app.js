"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongodb_1 = require("mongodb");
const app = express();
const MONGO_URL = 'mongodb://localhost:27017';
const mongoClient = new mongodb_1.MongoClient(MONGO_URL, { useNewUrlParser: true });
mongoClient.connect(function (err, client) {
    const db = client.db('neuroTradeDatasets');
    const Datasets = db.collection("datasets");
    const Examples = db.collection("examples");
    app.get('/datasets', function (req, res) {
        Datasets.find().toArray().then((response) => {
            res.send(response);
        });
    });
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
//# sourceMappingURL=app.js.map