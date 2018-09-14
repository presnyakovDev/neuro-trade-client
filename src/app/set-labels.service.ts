import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetLabelsService {
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
      case "sale":
        this.whereBuyIndexes.push(value)
        console.log("sale trig")
        break;
      case "buy":
        this.whereSaleIndexes.push(value)
        console.log("buy trig")
        break;
      default:
        console.log(this.whereSaleIndexes, this.whereBuyIndexes, this.setState);
    }
  }

  createResults(){
    this.results = new Array(this.length).fill([0]);
    console.log(this.results)
  }

  setLength(len){
    this.length = len;
    this.createResults()
    console.log(this.results)
  }

  getLabels(){
    for(let value of this.whereBuyIndexes){
      this.results[value] = [1];
    }
    for(let value of this.whereSaleIndexes){
      this.results[value] = [-1];
    }
    return this.results
  }
}
