import { Component, AfterViewInit } from '@angular/core';
import { SetLabelsService } from "../set-labels.service";
import { WebsocketService } from '../websocket.service';
import { Router } from '@angular/router';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements AfterViewInit {

  constructor(private setLabelsService:SetLabelsService, private websocketService:WebsocketService, private router: Router) { }

  ngAfterViewInit() {
    if(this.isActive()){
      console.log(this.setLabelsService.getLabels())
      this.websocketService.send(this.setLabelsService.getLabels());
    }
    console.log(this.isActive())

  }

  isActive(): boolean {
    return this.router.isActive(this.router.url);
  }

}
