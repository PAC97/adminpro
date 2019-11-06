import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'https://desempla2.herokuapp.com/';
  private socket;

  constructor() {
    this.socket = io(this.url);
   }

  public sendMessage(mensaje, emisor, receptor) {
    this.socket.emit('nuevo-mensaje', mensaje, emisor, receptor);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('mensajes-viejos', (mensaje) => {
            observer.next(mensaje);
        });
    });
}

}
