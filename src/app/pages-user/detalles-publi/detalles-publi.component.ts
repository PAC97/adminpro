import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
//alerta
import Swal from 'sweetalert2';
//service
import {ServicePubliService} from './service-publi.service';
//Messaje service
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-detalles-publi',
  templateUrl: './detalles-publi.component.html',
  styleUrls: ['./detalles-publi.component.css']
})
export class DetallesPubliComponent implements OnInit {
idUser:any;
idPubli:any;
userChat:any;
id:any;
img:any;
name:any;
apellido:any;
tel:any;
idPb:any;
publi:any;
titulo:any;
descrip:any;
fecha:any;
ser:any;
mensaje:'';
emisor:any;
idus:any;
  constructor(private activate:ActivatedRoute, private service:ServicePubliService, private chatservice:ChatService) { }

  ngOnInit() {
    this.idUser = this.activate.snapshot.params.id;
   
    this.idPubli = this.activate.snapshot.params.id2;
    

    this.emisor = localStorage.getItem('session');
    //obtener id chat
    this.obtenerIdUserChat();
    //publi
    this.obtenerPubliId();
    this.obtenerChat();
 }
  obtenerIdUserChat(){
    this.service.getIDUser(this.idUser)
    .subscribe(id =>{
      this.id = id;
      this.userChat = this.id.usuario;
      this.img = this.userChat.pathImg;
      this.name = this.userChat.Nombres;
      this.apellido = this.userChat.Apellidos;
      this.tel = this.userChat.Telefono;
      console.log(this.userChat);
    })
  }
  obtenerPubliId(){
    this.service.getPublicacionId(this.idPubli)
    .subscribe(pub =>{
      this.idPb = pub;
      this.publi = this.idPb.publicacion;
      this.ser = this.publi.ID_Servicio.nombre;
      this.titulo = this.publi.Titulo;
      this.descrip = this.publi.Descripcion;
      this.fecha = this.publi.Fecha;
      this.idus = this.publi.Usuario;
      console.log(this.publi);
    })
  }
  sendChat(){
    this.chatservice.sendMessage(this.mensaje, this.idPubli, this.idUser);
    this.mensaje = '';
    console.log(this.mensaje);
  }
  obtenerChat(){
    this.chatservice.getMessages()
    .subscribe(men => {
      /* this.mensajes = men; */
      console.log(this.mensaje);
    })
  }
}
