import { Component, OnInit } from '@angular/core';
import { ServiceChatsService } from '../service/service-chats.service';
@Component({
  selector: 'app-mess',
  templateUrl: './mess.component.html',
  styleUrls: ['./mess.component.css']
})
export class MessComponent implements OnInit {
  idR: any;
  idE: any;
  Mess = [];
  Echats: any;
  Ec: any;
  Rchats: any;
  Rc: any;
  session: any;
  constructor(private service: ServiceChatsService, ) { }

  ngOnInit() {
    this.session = localStorage.getItem('session');
  }
  getMessages(idE: string, idR: string) {
    this.service.getChatsUsers(idE, idR)
      .subscribe(chats => {
        this.Ec = chats;
        this.Echats = this.Ec.Chat;
        this.Echats.forEach(element => {
          var items = this.Mess.filter(function (items) {
            return items.Receptor._id == element.Receptor._id;
          })
          if (items.length > 0) {
            var index:number = this.Mess.indexOf(this.Mess.find(x => x.Receptor._id == element.Receptor._id));
            this.Mess.splice(index, 1);
          }
          else {
            this.Mess.push({ Emisor: element.Emisor._id, Chat: element.Mensaje, Receptor: element.Receptor._id, Fecha: element.Hora });
          }
        });
      })
    this.service.getChatsUsers(idR, idE)
      .subscribe(chat => {
        this.Rc = chat;
        this.Rchats = this.Rc.Chat;
        this.Rchats.forEach(element => {
          this.Mess.push({ Emisor: element.Emisor._id, Chat: element.Mensaje, Receptor: element.Receptor._id, Fecha: element.Hora });
        });
      });
    this.Mess.sort(function (a, b) {
      a = new Date(a.Fecha);
      b = new Date(b.Fecha);
      return a < b ? -1 : a > b ? 1 : 0;
    });
  }
}
