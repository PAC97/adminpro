import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
<<<<<<< HEAD
  private url = 'https://desempla2.herokuapp.com/';
=======
  private url = 'https://desempla2.herokuapp.com';
>>>>>>> 328af08ada2383d268f63731b398b59636f7c63d
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
