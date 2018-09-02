import { Component, OnChanges, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { PredictionsService } from "../predictions.service";

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnChanges {
  @Input() stockPrices;
  labels = [];
  data = [];
  chart;
  setState: "buy" | "sale";
  whereBuy = [];
  whereSale = [];

  constructor(private predictionsService:PredictionsService) { }

  ngOnChanges(){
    if(this.chart){
      this.chart.destroy()
    }
    if(this.stockPrices){
      this.dataTransform(this.stockPrices)
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          label: "ABBA",
          labels: this.labels,
          datasets: [
            {
              label: 'Stock Price',
              data: this.data,
              borderColor: "#FCBA04",
              backgroungColor: "#FCBA04",
              fill: false
            }
          ]
        },
        options: {
          responsive: false,
          legend: {
            display: true
          },
          onClick: this.onChartClick.bind(this)
        }
      });
    }
  }

  dataTransform(stockPrices){
    this.labels = [];
    this.data = [];
    stockPrices.forEach(item=>{
      this.labels.push(item.date)
      this.data.push(item.price)
    })
  }

  onChartClick(event, arr){
    let element = this.chart.getElementAtEvent(event);
    if (element.length > 0) {
        var value = this.chart.data.datasets[element[0]._datasetIndex].data[element[0]._index];
        console.log(this)
        this.setPredictions(value)
    }
  }

  setSale(){
    this.setState = "sale";
  }

  setBuy(){
    this.setState = "buy";
  }

  setPredictions(value){
    switch(this.setState){
      case "sale":
        this.whereSale.push(value)
        console.log("sale trig")
        break;
      case "buy":
        this.whereBuy.push(value)
        console.log("buy trig")
        break;
      default:
        console.log(this.whereSale, this.whereBuy, this.setState);
    }
  }
}
