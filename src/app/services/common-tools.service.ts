import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonToolsService {

  dataTransformForStockPrice(object, stockPrices:stockPrice[]){
    object.labels = [];
    object.data = [];
    stockPrices.forEach(item=>{
      object.labels.push(item.date)
      object.data.push(item.price)
    })
  }

  constructor() { }
}

interface stockPrice {
  date: string
  price: number
}
