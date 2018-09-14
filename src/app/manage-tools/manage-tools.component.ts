import { Component, OnInit } from '@angular/core';
import { StockApiService } from "../stock-api.service";
import { PredictionsService } from "../predictions.service";
import { SetLabelsService } from "../set-labels.service";

@Component({
  selector: 'app-manage-tools',
  templateUrl: './manage-tools.component.html',
  styleUrls: ['./manage-tools.component.css']
})
export class ManageToolsComponent implements OnInit {
  stocks;
  predictions;
  PERIODS = ['1d', '1m', '3m', '6m', '1y'];
  COMPANIES = ['baba'];
  selectedValue = {
    period: '',
    company: ''
  }

  constructor( private stockApiService:StockApiService, private predictionsService:PredictionsService, private setLabelsService:SetLabelsService) { }

  go(){
    this.stockApiService.getStockData(this.selectedValue.company, this.selectedValue.period)
    .subscribe((data:Array<any>)=>{
      this.stocks = this.stockApiService.mapResults(data)
      this.setLabelsService.setLength(data.length)
    })

  }

  ngOnInit() {
    /*
    this.stockApiService.getHistorycalStockData()
      .subscribe((data)=>{
        this.stocks = this.stockApiService.mapResults(data);
        console.log(this.stockApiService.mapResults(data));
      })
    this.predictionsService.getPredictions()
      .subscribe((data:any[])=>{
        this.predictions = data.map(num=> Math.round(num*Math.pow(10, 104)))
        console.log(this.predictions)
      })
      */
  }

}
