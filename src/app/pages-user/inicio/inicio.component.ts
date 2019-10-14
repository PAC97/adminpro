import { Component, OnInit, Renderer2, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { PublicacionesService } from './services/publicaciones.service';
import { publicaciones } from './models/publicaciones';
//form
import {FormControl} from '@angular/forms';
//rutas
import { Router } from '@angular/router';
//alerta
import Swal from 'sweetalert2';

import {debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  value="";

  constructor(private service: PublicacionesService, private router: Router, private renderer: Renderer2) { }
  //variables
  publi: publicaciones = {
    'Titulo': '',
    'Descripcion': '',
    'Usuario': '',
    'ID_Servicio': '',
    'Fecha': new Date(Date.now())
  }
  usuario: any;
  modal: any;
  pubb:any;
  ok:any;
  user;
  img;
  puls:any;
  ser:any;
  servicios:any;
  idSer:any;
  IdFil:any;

//
  ngOnInit() {
    var session = localStorage.getItem('x-access-token');
    if(session == null){
      this.router.navigate(['../login'])
    }
    this.usuario = localStorage.getItem('session');
    this.obtenesPublicaciones();
    //user
    this.getUser();
    //servicios
    this.getSer();
  }
  getUser(){
    this.service.getIDUser()
    .subscribe(user=>{
      this.user = user;
      this.img = this.user.usuario.pathImg;
      console.log(this.user);
    });
  }
  getSer(){
    this.service.getServicios()
    .subscribe(ser=>{
      this.ser = ser;
      this.servicios = this.ser.servicios;
      console.log(ser);
    })
  }
  obtenesPublicaciones(){
    this.service.getPublicaciones()
    .subscribe(pubb =>{
      this.puls = pubb;
      this.pubb = this.puls.publicaciones;
      var id = this.usuario;
      var items = this.pubb.filter(function(item) {
        return item.Usuario._id != id;
      });
      console.log(items);
      this.pubb = items;
      this.pubb.sort(function(a, b) {
        a = new Date(a.Fecha);
        b = new Date(b.Fecha);
        return a>b ? -1 : a<b ? 1 : 0;
    });

    })
  }
  //seleccionar
  select($event){
    this.idSer = event;
    this.publi.ID_Servicio = this.idSer.target.value;
    console.log(this.idSer.target.value);
  }
  //filtrar 
  filt($event){
    this.IdFil = event;
    if(this.IdFil.target.value == 'todos'){
      this.obtenesPublicaciones();
    }
    else{
      this.getidServicio();
    }
  }
  //get por id de servicios
  getidServicio(){
    this.service.getIDServicio(this.IdFil.target.value)
    .subscribe(pubb =>{
      this.puls = pubb;
      this.pubb = this.puls.publicaciones;
      var id = this.usuario;
      var items = this.pubb.filter(function(item) {
        return item.Usuario._id != id;
      });
      console.log(items);
      this.pubb = items;
      this.pubb.sort(function(a, b) {
        a = new Date(a.Fecha);
        b = new Date(b.Fecha);
        return a>b ? -1 : a<b ? 1 : 0;
    });
    })
  }
  //
  //Publicar para cada usuario xd d xd xd xd xd 
  publicar() {
    this.publi.Usuario = this.usuario;
    if (this.publi.Titulo != '' && this.publi.Descripcion != '') {
      this.service.postPublicaciones(this.publi)
      .subscribe(pub =>{
        Swal.fire(
          'Publicacion creada con exito',
          'Publicacion realizada',
          'success'
        )
        console.log(pub);
        this.publi.Titulo = '';
        this.publi.Descripcion = '';
          this.obtenesPublicaciones();
      })    
    }
    else{
      Swal.fire(
        'Error',
        'Todos los datos son requeridos',
        'warning'
      )
    }
    console.log(this.publi);
  }
}
