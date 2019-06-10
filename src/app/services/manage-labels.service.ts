
 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageLabelsService {
  setState: "buy" | "sale";
  whereBuyIndexes = [];
  whereSaleIndexes = [];
  length = 0;
  results= [];

  constructor() { }

  setSale(){
    this.setState = "sale";
  }

  setBuy(){
    this.setState = "buy";
  }

  addLabel(value){
    switch(this.setState){
      case "buy":
        this.whereBuyIndexes.push(value)
        break;
      case "sale":
        this.whereSaleIndexes.push(value)
        break;
      default:
        console.log(this.whereSaleIndexes, this.whereBuyIndexes, this.setState);
    }
  }

  createResults(){
    this.results = this.autofill()
  }

  autofill():number[]{
    return new Array(this.length).fill(0.5);
  }

  setLength(len){
    this.length = len;
    this.createResults()
  }

  getLabels(){
    console.log(this.whereBuyIndexes, this.whereSaleIndexes)
    for(let value of this.whereBuyIndexes){
      this.results[value] = 1;
    }
    for(let value of this.whereSaleIndexes){
      this.results[value] = 0;
    }
    return this.results
  }
}
