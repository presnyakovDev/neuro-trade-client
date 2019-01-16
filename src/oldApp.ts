import * as express from 'express';
//import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { MongooseFacade } from "./mongooseFacade";
const app = express();
import * as https from 'https';

const mongooseFacade = new MongooseFacade('mongodb://localhost:27017');
const schema = {
  stockName:  String,
  averagePrice: Number,
  changePercent: Number,
  upOrDown: Number,
  howFar:Number,
  forWeek: Number,
  forMonth: Number,
  for3Month: Number,
  for6Month: Number,
  forYear: Number
};

function getStockChart(stockName:string, url){
  let period = '5y';
  let data = '';
  let reqUrl = url + stockName + '/chart/' + period;
  console.log("Request URL: ", reqUrl)
  https.get(reqUrl, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log("Http request result: ", JSON.parse(data).explanation);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}

app.get('/', function (req, res) {
  console.log("App get: ", arguments)
});

app.get('/generate_dataset/:stock', function (req, res){
  getStockChart(res.params.stock, 'https://api.iextrading.com/1.0/stock/');
  mongooseFacade.createModel('stocksDatasets', schema);
  console.log("stock:", res.params.stock)
});

app.get('/get_dataset/:stock', function (req, res){
  //get dataset from db
});

app.listen(3000, function (req, res) {
  mongooseFacade.connect();
  console.log('Dataset-manage microservice starts on 3000...');
});
