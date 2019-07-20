import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonToolsService {

  dataTransformForStockPrice(stockPrices:stockPrice[]){
    let result = {labels:[], data:[]};
    console.log(result)
    stockPrices.forEach(item=>{
      result.labels.push(item.date)
      result.data.push(item.price)
    })
    return result;
  }

  constructor() { }
}

interface stockPrice {
  date: string
  price: number
}
