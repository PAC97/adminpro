import { Component, OnInit } from '@angular/core';
import {ServiceChatsService} from '../service/service-chats.service';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
idR:any;
idE:any;
Mess=[];
Echats:any;
Ec:any;
Rchats:any;
Rc:any;
session:any;
  constructor(private service:ServiceChatsService, private activate:ActivatedRoute) { }

  ngOnInit() {
    this.idR = this.activate.snapshot.params.id;
    this.idE = this.activate.snapshot.params.id2;
    this.session = localStorage.getItem('session');
    this.getMessages();
  }
  getMessages(){
    this.service.getChatsUsers(this.idE, this.idR)
    .subscribe(chats=>{
      this.Ec = chats;
      this.Echats = this.Ec.Chat;
      this.Echats.forEach(element => {
          this.Mess.push({ Emisor: element.Emisor._id, Chat: element.Mensaje, Receptor: element.Receptor._id, Fecha: element.Hora });
        });
    })
    this.service.getChatsUsers(this.idR, this.idE)
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
   
    }
}
