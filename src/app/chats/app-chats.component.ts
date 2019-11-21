import { Component, OnInit } from '@angular/core';
import { ServiceChatsService } from './service/service-chats.service';
//rutas
import { Router } from '@angular/router';
import { element } from 'protractor';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-app-chats',
  templateUrl: './app-chats.component.html',
  styleUrls: []
})
export class AppChatsComponent implements OnInit {

  constructor(private service: ServiceChatsService, public datepipe:DatePipe) { }
  chat: any;
  chatsU: any;
  user: any;
  Usuario: any;
  Usu: any;
  idR: any;
  idE: any;
  Mess = [];
  Echats: any;
  Ec: any;
  Rchats: any;
  Rc: any;
  session: any;
  Us = [];
  Chats=[];
  Chat=[];
  ngOnInit() {
    this.user = localStorage.getItem('session');
    this.getchat();
  }
  getchat() {
    this.service.getIDchats(this.user)
      .subscribe(chat => {
        this.chat = chat;
        this.chatsU = this.chat.Chat;
        this.chatsU.forEach(element => {
          var items = this.Mess.filter(function (items) {
            return items.Receptor == element.Receptor._id;
          })
          console.log(element);
          if (items.length > 1) {
            var index: number = this.Mess.indexOf(this.Mess.find(x => x.Receptor.Nombres == element.Receptor.Nombres));
            this.Mess.splice(index, 1);
          }
          else {
            this.Mess.push({ Emisor: element.Emisor._id, Foto: element.Receptor.pathImg, Receptor: element.Receptor._id, Nombres: element.Receptor.Nombres, Apellidos: element.Receptor.Apellidos });
          }
        })
        this.Usuario = this.Mess;

        function eliminarObjetosDuplicados(arr, prop) {
          var nuevoArray = [];
          var lookup = {};

          for (var i in arr) {
            lookup[arr[i][prop]] = arr[i];
          }

          for (i in lookup) {
            nuevoArray.push(lookup[i]);
          }

          return nuevoArray;
        }
        this.Us = eliminarObjetosDuplicados(this.Usuario, 'Receptor');
        console.log(this.Us)
      })
  }


  getMessages(idE: string, idR: string) {
   this.Chat.forEach( element =>{
      var i = this.Chat.indexOf(element);
      console.log(i);
      this.Chat.splice(i, 1);
    })
    this.service.getChatsUsers(idE, idR)
      .subscribe(chats => {
        this.Ec = chats;
        this.Echats = this.Ec.Chat;
        console.log(chats);
        this.Echats.forEach(element => {
          let fecha = this.datepipe.transform(element.Hora, 'MM-dd-yyyy h:mm:ss a');
          console.log(fecha);
          this.Chat.push({ Emisor: element.Emisor._id, Chat: element.Mensaje, Receptor: element.Receptor._id, Fecha: fecha });
        });
      })
      console.log(this.Mess);
    this.service.getChatsUsers(idR, idE)
      .subscribe(chat => {
        console.log(chat);
        this.Rc = chat;
        this.Rchats = this.Rc.Chat;
        this.Rchats.forEach(element => {
          let fecha = this.datepipe.transform(element.Hora, 'MM-dd-yyyy h:mm:ss a');
          console.log(fecha);
          this.Chat.push({ Emisor: element.Emisor._id, Chat: element.Mensaje, Receptor: element.Receptor._id, Fecha: fecha });
        });
      });
    this.Chat.sort(function (a, b) {
      a = new Date(a.Fecha);
      b = new Date(b.Fecha);
      return a < b ? -1 : a > b ? 1 : 0;
    });
    console.log(this.Chat);
  }
}
