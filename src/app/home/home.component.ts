import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Neuro Trade';

  constructor(private websocketService:WebsocketService) { }

  ngOnInit() {
  }

  send(){
    this.websocketService.send([0,1,1,0]);
  }

}
