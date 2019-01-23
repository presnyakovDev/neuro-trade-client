import * as express from 'express';
import * as bodyParser from "body-parser";
import { MongoClient, ObjectId } from 'mongodb';
import { MongooseFacade } from "./mongooseFacade";
const app = express();
const MONGO_URL = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(MONGO_URL, { useNewUrlParser: true });
import * as https from 'https';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoClient.connect(function(err, client){
  const db = client.db('neuroTradeDatasets');
  const Datasets = db.collection("datasets");
  const Examples = db.collection("examples");

  app.get('/datasets', function (req, res) {
    Datasets.find().toArray().then((response)=>{
      res.send(response);
    });
  });

  app.post('/dataset', function (req, res) {
    let description = req.body.description;
    let date = req.body.date;
    Datasets.insertOne({description: description, date: date, examples:[]})
      .then((res)=>{
        res.end("Dataset added!");
      })
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
