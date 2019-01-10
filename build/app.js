"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongooseFacade_1 = require("./mongooseFacade");
const app = express();
const https = require("https");
const mongooseFacade = new mongooseFacade_1.MongooseFacade('mongodb://localhost:27017');
const schema = {
    stockName: String,
    averagePrice: Number,
    changePercent: Number,
    upOrDown: Number,
    howFar: Number,
    forWeek: Number,
    forMonth: Number,
    for3Month: Number,
    for6Month: Number,
    forYear: Number
};
mongooseFacade.connect();
mongooseFacade.createModel('stocksDatasets', schema);
function getStockChart(stockName, url) {
    let period = '5y';
    let data = '';
    let reqUrl = url + stockName + '/chart/' + period;
    console.log(reqUrl);
    https.get(reqUrl, (resp) => {
        let data = '';
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data).explanation);
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
getStockChart('aapl', 'https://api.iextrading.com/1.0/stock/');
app.get('/', function (req, res) {
    console.log(arguments);
});
app.listen(3000, function () {
    console.log('Dataset-manage microservice starts on 3000...');
});
//# sourceMappingURL=app.js.map