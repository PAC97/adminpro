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
  idR:any;
  idE:any;
  Mess=[];
  Echats:any;
  Ec:any;
  Rchats:any;
  Rc:any;
  session:any;
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
  getMessages(idE:string, idR:string){
    this.service.getChatsUsers(idE,idR)
    .subscribe(chats=>{
      this.Ec = chats;
      this.Echats = this.Ec.Chat;
      this.Echats.forEach(element => {
        this.Mess.push({Emisor:element.Emisor._id, Chat:element.Mensaje, Receptor:element.Receptor._id, Fecha:element.Hora});
      });
    })
    this.service.getChatsUsers(idR,idE)
    .subscribe(chat=>{
      this.Rc = chat;
      this.Rchats = this.Rc.Chat;
      this.Rchats.forEach(element => {
        this.Mess.push({Emisor:element.Emisor._id, Chat:element.Mensaje, Receptor:element.Receptor._id, Fecha:element.Hora});
      });
    });
     this.Mess.sort(function(a, b) {
        a = new Date(a.Fecha);
        b = new Date(b.Fecha);
        return a<b ? -1 : a>b ? 1 : 0;
    });
    console.log(this.Mess)
    }
}
