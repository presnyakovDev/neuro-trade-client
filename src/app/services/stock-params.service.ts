import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockParamsService {

  PERIODS = ['1d', '1m', '3m', '6m', '1y'];
  COMPANIES = ['BABA', 'GOOGL', 'FB', 'TSLA', 'NFLX'];
  selectedValue = {
    period: '',
    stockName: ''
  };

  constructor() { }

  getStockName(){
    return this.selectedValue.stockName
  }

  getPeriod(){
    return this.selectedValue.period
  }
}
