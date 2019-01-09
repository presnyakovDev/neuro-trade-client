import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PERIOD = "1y";
const URL = "https://api.iextrading.com/1.0/stock/";
const STOCKS = [ {label:"Alibaba" ,key:"BABA"}, {label: "Google", key:"GOOGL"}, { label:"Facebook", key:"FB"} ];
const PERIODS = {Year: "1y", threeMonth: "3m"}
const STOCK = "BABA";

@Injectable({
  providedIn: 'root'
})
export class StockApiService {

  constructor(private http: HttpClient) { }

  getStockData(stock, period){
    return this.http.get(URL + stock + "/chart/" + period)
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
