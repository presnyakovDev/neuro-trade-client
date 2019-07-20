import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PERIOD = "1y";
const URL = "https://api.iextrading.com/1.0/stock/";
const newURL = "https://cloud.iexapis.com/v1/stock/";
const STOCKS = [ {label:"Alibaba" ,key:"BABA"}, {label: "Google", key:"GOOGL"}, { label:"Facebook", key:"FB"} ];
const PERIODS = {Year: "1y", threeMonth: "3m"}
const STOCK = "BABA";
const APIKEY = "pk_ca2f762a4f2c42c4aea0407deafbf896";

@Injectable({
  providedIn: 'root'
})
export class StockApiService {

  constructor(private http: HttpClient) { }

  getStockData(stock, period){
    return this.http.get(newURL + stock + "/chart/" + period + '?token=' + APIKEY)
  }

  getHistorycalStockData(){
    return this.getStockData(STOCK, PERIODS.threeMonth)
  }

  mapResults(stockPrices){
    return stockPrices.map(item => ({
      date: item.date,
      price: item.close
    }));
  }
}
