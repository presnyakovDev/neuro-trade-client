import { Component, AfterViewInit } from '@angular/core';
import { SetLabelsService } from 'app/services/set-labels.service';
import { WebsocketService } from 'app/services/websocket.service';
import { StockParamsService } from 'app/services/stock-params.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements AfterViewInit {

  constructor(
    private setLabelsService: SetLabelsService,
    private websocketService: WebsocketService,
    private router: Router,
    private stockParamsService: StockParamsService
  ) { }

  ngAfterViewInit() {
    if(this.isActive()){
      console.log(this.setLabelsService.getLabels())
      this.websocketService.send({data:this.setLabelsService.getLabels(), stockName: this.stockParamsService.getStockName(), period: this.stockParamsService.getPeriod()});
    }
    console.log(this.isActive())

  }

  isActive(): boolean {
    return this.router.isActive(this.router.url, true);
  }

  again(){

  }

}
