import { Injectable } from '@angular/core';

function onOpen(){
  console.log("Соединение установлено.");
}

function onClose(event:Event){
  if (event.wasClean) {
    console.log('Соединение закрыто чисто');
  } else {
    console.log('Обрыв соединения'); // например, "убит" процесс сервера
  }
  console.log('Код: ' + event.code + ' причина: ' + event.reason);
}

function onMessage(event:Event){
  console.log("Получены данные ");
  console.log(event.data)
  console.log(JSON.parse(event.data))
}

function onError(error:Event){
  console.log("Ошибка " + error.message);
}

const SERVER_URL = 'ws://localhost:8000';
const ECHO_SERVER = "wss://echo.websocket.org/"

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socket;

  constructor() { }

  send(data){
    this.socket.send(JSON.stringify(data))
  }

  run(){
    this.socket = new WebSocket(SERVER_URL);
    this.socket.onopen = onOpen
    this.socket.onclose = onClose
    this.socket.onmessage = onMessage
    this.socket.onerror = onError
  }
}

class Event {
  message:string
  data: any
  code: number
  reason: string
  wasClean: boolean
}
