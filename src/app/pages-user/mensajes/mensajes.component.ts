import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  mensaje: string;
  emisor: any;
  receptor: String = '5d9927baaa133c14eb0e1bc9'
  mensajes: string[] = [];
  constructor(private chatService: ChatService) { 

  }

  ngOnInit() {
    
    this.emisor = localStorage.getItem('session');
    console.log(this.emisor);
    this.chatService
      .getMessages()
      .subscribe((mensaje: string) => {
        this.mensajes.push(mensaje);
      });
      console.log(this.mensajes);
  }

  sendMessage() {
    this.chatService.sendMessage(this.mensaje, this.emisor, this.receptor);
    this.mensaje = '';
    console.log(this.mensaje);
  }

}
