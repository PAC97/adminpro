import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {ServicesPubliCuentaService} from './services-publi-cuenta.service';
@Component({
  selector: 'app-publi-cuenta',
  templateUrl: './publi-cuenta.component.html',
  styleUrls: ['./publi-cuenta.component.css']
})
export class PubliCuentaComponent implements OnInit {
idUser:any;
user:any;
datos:any;
img:any;
nombre:any;
apellido:any;
pubb:any;
publi:any;
telefono:any;
filter: any;
  constructor(private activate:ActivatedRoute, private service:ServicesPubliCuentaService) { }

  ngOnInit() {
    this.idUser = this.activate.snapshot.params.id;
  //user
  this.obtenerUser();
  //pub
  this.obtenerPubliId();
  }
  obtenerUser(){
    this.service.getIDUser(this.idUser)
    .subscribe(us =>{
      this.datos = us;
      this.user = this.datos.usuario;
      this.img = this.user.pathImg;
      this.nombre = this.user.Nombres;
      this.apellido = this.user.Apellidos;
      this.telefono = this.user.Telefono;
    })
  }
  obtenerPubliId(){
    this.service.getPublicacionporUsuario(this.idUser)
    .subscribe(pub =>{
      this.publi = pub;
      this.pubb = this.publi.publicaciones;
    })
  }
}
