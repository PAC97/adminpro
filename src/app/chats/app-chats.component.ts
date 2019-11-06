import { Component, OnInit } from '@angular/core';
import {ServiceChatsService} from './service/service-chats.service';
//rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-chats',
  templateUrl: './app-chats.component.html',
  styleUrls: []
})
export class AppChatsComponent implements OnInit {

  constructor(private service: ServiceChatsService) { }
  chat:any;
  chatsU:any;
  user:any;
  Usuario:any;
  Usu:any;
  ngOnInit() {
    this.user = localStorage.getItem('session');
    this.getchat();
  }
  getchat(){
    this.service.getIDchats(this.user)
    .subscribe(chat=>{
      this.chat = chat;
      this.chatsU = this.chat.Chat;
      console.log(this.chatsU);
    
      this.chatsU.forEach(element => {
        var items = this.chatsU.filter(function (items){
          return items.Receptor.Nombres == element.Receptor.Nombres;
        })
          var index:number = this.chatsU.indexOf(this.chatsU.find(x => x.Receptor.Nombres == element.Receptor.Nombres));
          this.chatsU.splice(index, 1);
      });
      this.Usuario = this.chatsU;
      console.log(this.Usuario);
    })
  }
}
