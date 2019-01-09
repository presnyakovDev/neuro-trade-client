import { Component } from '@angular/core';
import { WebsocketService } from 'app/services/websocket.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private websocketService:WebsocketService){
    this.websocketService.run()
    //this.websocketService.send('test')
  }

  ngOnInit(){}
}
