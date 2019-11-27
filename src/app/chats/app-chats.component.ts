import { Component, OnInit, Inject } from '@angular/core';
import { ServiceChatsService } from './service/service-chats.service';
//rutas

import { Router } from '@angular/router';
import { element } from 'protractor';
import { DatePipe } from '@angular/common';
import {ChatService} from '../services/chat.service';

import {BreadcrumbsComponent} from '../shared/breadcrumbs/breadcrumbs.component';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
@Component({
  selector: 'app-app-chats',
  templateUrl: './app-chats.component.html',
  styleUrls: ['./app-chats.component.css']
})
export class AppChatsComponent implements OnInit {

  constructor(private service: ServiceChatsService, public datepipe:DatePipe, private chatSer:ChatService) { }
  @Inject(BreadcrumbsComponent) foter : BreadcrumbsComponent;

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
  //send mesaje
  hora = Date.now();
  mensaje:any;
  emisor;any;
  receptor:any;
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
      })
  }
  getMessages(idE: string, idR: string) {
    
    this.Chat.forEach( element =>{
      var i = this.Chat.indexOf(element);
      console.log(i);
      this.Chat.splice(i, 1);
    });
    this.Chat.forEach( element =>{
      var i = this.Chat.indexOf(element);
      console.log(i);
      this.Chat.splice(i, 1);
    });
    this.Chat.forEach( element =>{
      var i = this.Chat.indexOf(element);
      console.log(i);
      this.Chat.splice(i, 1);
    });
    this.service.getChatsUsers(idE, idR)
      .subscribe(chats => {
        this.Ec = chats;
        this.Echats = this.Ec.Chat;
        console.log(chats);
        this.Echats.forEach(element => {
          let fecha = this.datepipe.transform(element.Hora, 'M/d/yy h:mm a');
          console.log(fecha);
          this.Chat.push({ Emisor: element.Emisor._id, Chat: element.Mensaje, Receptor: element.Receptor._id, Fecha: fecha, img: element.Emisor.pathImg, _id: element._id});
          this.Chat.sort(function (a, b) {
            a = new Date(a.Fecha);
            b = new Date(b.Fecha);
            return a < b ? -1 : a > b ? 1 : 0;
          });
        });
      })
      console.log(this.Mess);
    this.service.getChatsUsers(idR, idE)
      .subscribe(chat => {
        console.log(chat);
        this.Rc = chat;
        this.Rchats = this.Rc.Chat;
        this.Rchats.forEach(element => {
          let fecha = this.datepipe.transform(element.Hora, 'M/d/yy h:mm a');
          console.log(fecha);
          this.Chat.push({ Emisor: element.Emisor._id, Chat: element.Mensaje, Receptor: element.Receptor._id, Fecha: fecha, img: element.Emisor.pathImg, _id: element._id});
          this.Chat.sort(function (a, b) {
            a = new Date(a.Fecha);
            b = new Date(b.Fecha);
            return a < b ? -1 : a > b ? 1 : 0;
          });
        });
      });
    this.Chat.sort(function (a, b) {
      a = new Date(a.Fecha);
      b = new Date(b.Fecha);
      return a < b ? -1 : a > b ? 1 : 0;
    });
    console.log(this.Chat); 
  }
  
  addMes(idE:string, idR:string){
   this.emisor = idE;
   this.receptor = idR;
  }
  sendChat(){
    if(this.mensaje != "" && this.emisor != null, this.receptor!= null){
      this.chatSer.sendMessage(this.mensaje, this.emisor, this.receptor, this.hora)
      this.mensaje = '';
      Swal.fire(
        'Enviado!',
        'Mensaje enviado',
        'success'
      )
      this.Chat.forEach( element =>{
        var i = this.Chat.indexOf(element);
        console.log(i);
        this.Chat.splice(i, 1);
      });
      this.getMessages(this.emisor, this.receptor);
    }
    else{
      Swal.fire(
        'Datos invalidos!',
        'Debes llenar todo los campos',
        'warning'
      )
    }
  }
  deletChat(id:string, idE:string, idR:string){
    Swal.fire({
      title: '¿Desea eliminar el mensaje?',
      text: "Al eliminar no se podrá recuperar el mensaje!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.value) {
        this.service.deletChat(id)
          .subscribe(
            res => {
            },
            err => console.log(err)
          )
        Swal.fire(
          'Eliminado!',
          'El mensaje se elimino correctamente.',
          'success'
        )
        this.getMessages(idE, idR);
      }
    });
  }
}
