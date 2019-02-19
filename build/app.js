"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongodb_1 = require("mongodb");
const app = express();
const MONGO_URL = 'mongodb://localhost:27017';
const mongoClient = new mongodb_1.MongoClient(MONGO_URL, { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoClient.connect(function (err, client) {
    const db = client.db('neuroTradeDatasets');
    const Datasets = db.collection("datasets");
    const Examples = db.collection("examples");
    const Lables = db.collection("lables");
    app.get('/datasets', function (req, res) {
        Datasets.find().toArray().then((response) => {
            res.status(200).send(response);
        });
    });
    app.post('/dataset', function (req, res) {
        let description = req.body.description;
        let date = Date.now();
        Datasets.insertOne({ description: description, date: date })
            .then((response) => {
            res.status(200).send(Object.assign({}, response, { status: "Dataset added!" }));
        });
    });
    app.delete('/dataset', function (req, res) {
        let id = req.body.id;
        Datasets.deleteOne({ _id: mongodb_1.ObjectId(id) })
            .then((response) => {
            res.status(200).send(Object.assign({}, response, { status: "Dataset removed!" }));
        });
    });
    app.get('/examples', function (req, res) {
        let datasetId = req.body.datasetId;
        Examples.find({ datasetId: datasetId }).toArray().then((response) => {
            res.status(200).send(response);
        });
    });
    app.post('/example', function (req, res) {
        Examples.insertOne();
    });
    app.delete('/example', function (req, res) {
        let id = req.body.id;
        Examples.deleteOne({ _id: mongodb_1.ObjectId(id) })
            .then((response) => {
            res.status(200).send(Object.assign({}, response, { status: "Examples removed!" }));
        });
    });
});
app.listen(3000, function () {
    console.log('Example app listening on http://localhost:3000/');
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