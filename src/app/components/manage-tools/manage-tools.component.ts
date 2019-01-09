import { Component, OnInit } from '@angular/core';
import { StockApiService } from "app/services/stock-api.service";
import { PredictionsService } from "app/services/predictions.service";
import { SetLabelsService } from "app/services/set-labels.service";
import { CommonToolsService } from "app/services/common-tools.service";
import { StockParamsService } from "app/services/stock-params.service";

@Component({
  selector: 'app-manage-tools',
  templateUrl: './manage-tools.component.html',
  styleUrls: ['./manage-tools.component.css']
})

export class ManageToolsComponent implements OnInit {
  stocks = {};

  constructor(
    private stockApiService: StockApiService,
    private predictionsService: PredictionsService,
    private setLabelsService: SetLabelsService,
    private commonToolsService: CommonToolsService,
    private stockParamsService: StockParamsService
    ) { }

  go(){
    this.stockApiService.getStockData(this.stockParamsService.selectedValue.stockName, this.stockParamsService.selectedValue.period)
    .subscribe((data:Array<any>)=>{
      this.commonToolsService.dataTransformForStockPrice(this.stocks, this.stockApiService.mapResults(data))
      this.setLabelsService.setLength(data.length)
    })

  }

  ngOnInit() {}

}
