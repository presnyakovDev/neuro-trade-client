import { Component, AfterViewInit } from '@angular/core';
import { ManageLabelsService } from 'app/services/manage-labels.service';
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
    private manageLabelsService: ManageLabelsService,
    private websocketService: WebsocketService,
    private router: Router,
    private stockParamsService: StockParamsService
  ) { }

  ngAfterViewInit() {
    if(this.isActive()){
      console.log(this.manageLabelsService.getLabels())
      this.websocketService.send({data:this.manageLabelsService.getLabels(), stockName: this.stockParamsService.getStockName(), period: this.stockParamsService.getPeriod()});
    }
    console.log(this.isActive())

  }

  isActive(): boolean {
    return this.router.isActive(this.router.url, true);
  }

  again(){

  }

}
