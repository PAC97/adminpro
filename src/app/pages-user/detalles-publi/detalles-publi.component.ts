import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
//alerta
import Swal from 'sweetalert2';
//service
import {ServicePubliService} from './service-publi.service';

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
  constructor(private activate:ActivatedRoute, private service:ServicePubliService) { }

  ngOnInit() {
    this.idUser = this.activate.snapshot.params.id;
    console.log(this.idUser);
    this.idPubli = this.activate.snapshot.params.id2;
    console.log(this.idPubli);
    //obtener id chat
    this.obtenerIdUserChat();
    //publi
    this.obtenerPubliId();
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
      console.log(this.publi);
    })
  }
}
