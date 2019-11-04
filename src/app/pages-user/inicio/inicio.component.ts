import { Component, OnInit, Renderer2, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { PublicacionesService } from './services/publicaciones.service';
import { publicaciones } from './models/publicaciones';
//form
import { FormControl, FormGroup } from '@angular/forms';
//rutas
import { Router } from '@angular/router';
//alerta
import Swal from 'sweetalert2';

import {debounceTime} from 'rxjs/operators';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { element } from 'protractor';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  value="";
  public selectControl2 = new FormControl();
  public selectControl = new FormControl();
  constructor(private service: PublicacionesService, private router: Router, private renderer: Renderer2) { }
  //variables
  filter:any;
  p:any;
  publi: publicaciones = {
    'Titulo': '',
    'Descripcion': '',
    'Usuario': '',
    'ID_Servicio': '',
    'Fecha': new Date(Date.now())
  }
  siT:any;
  an=[];
  usuario: any;
  modal: any;
  pubb:any;
  ok:any;
  user;
  img;
  puls:any;
  
  ser2:any;
  servicios2:any;
  ser:any;
  servicios:any;
  idSer:any;
  IdFil:any;

//
PalMal=['puta', 'perra', 'prostituta', 'pendejo', 'culero', 'sexo', 'anal'];
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
    this.getSer2();
    //filtrar
    this.Filtrar();

    this.select();
  }
  Filtrar(){

    this.selectControl.valueChanges
      .subscribe((subscriptionTypeId: number) => {
        const obj = this.servicios.find(item => item._id === subscriptionTypeId);
        this.IdFil = obj;
        if(this.IdFil._id == 'todo'){
          this.obtenesPublicaciones();
        }
        else{
          this.getidServicio();
        }
      });
  }
  getUser(){
    this.service.getIDUser()
    .subscribe(user=>{
      this.user = user;
      this.img = this.user.usuario.pathImg;
      
    });
  }
  getSer(){
    this.service.getServicios()
    .subscribe(ser=>{
      this.ser = ser;
      this.servicios = this.ser.servicios;
      this.servicios.unshift({_id: 'todo', nombre: 'Mostrar todos los datos', descripcion:'todo'});
      
    })
  }
  getSer2(){
    this.service.getServicios()
    .subscribe(ser=>{
      this.ser2 = ser;
      this.servicios2 = this.ser2.servicios;
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
      this.pubb = items;
      this.pubb.sort(function(a, b) {
        a = new Date(a.Fecha);
        b = new Date(b.Fecha);
        return a>b ? -1 : a<b ? 1 : 0;
    });
    
    })
  }
  //seleccionar
  select(){
    this.selectControl2.valueChanges
      .subscribe((subscriptionTypeId: number) => {
        const obj = this.servicios2.find(item => item._id === subscriptionTypeId);
        this.publi.ID_Servicio = obj._id;
     });
  }
  //get r id de servicios
  getidServicio(){
    this.service.getIDServicio(this.IdFil._id)
    .subscribe(pubb =>{
      this.puls = pubb;
      this.pubb = this.puls.publicaciones;
      var id = this.usuario;
      
      var items = this.pubb.filter(function(item) {
        return item.Usuario != id;
      });
      
      this.pubb = items;
      this.pubb.sort(function(a, b) {
        a = new Date(a.Fecha);
        b = new Date(b.Fecha);
        return a>b ? -1 : a<b ? 1 : 0;
    });
    })
  }
  //
  //Publicar para cada usuario xd d xd xd 
  publicar() {
    this.publi.Usuario = this.usuario;
    if (this.publi.Titulo != '' && this.publi.Descripcion != '') {
      var titu = this.publi.Titulo.split(" ");
      var des = this.publi.Descripcion.split(" ");
      titu.forEach(element =>{
      var items = this.PalMal.filter( function (items){
          return items == element
        })
        console.log(items);
        if(items.length > 0){
          this.siT = items;
        } 
        else{
          this.siT=this.an;
        }
      });
      des.forEach(element =>{
        var items = this.PalMal.filter( function (items){
            return items == element
          })
          if(items.length > 0){
            this.siT = items;

          } 
          else{
            if(this.siT.length <= 0){
              this.siT = this.an;
            }
            else{
              console.log(this.siT);
            }
            
          }
        })
      console.log(this.siT);
      if(this.siT.length <= 0){
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
        'Error esta palabra no esta permitida:  ' + this.siT,
        'Al parecer has ingresado palabras que no son permitidas',
        'warning'
      )
    }
    }
    else{
      Swal.fire(
        'Error',
        'Todos los datos son requeridos',
        'warning'
      )
    }
    console.log(this.publi)
  }
}
