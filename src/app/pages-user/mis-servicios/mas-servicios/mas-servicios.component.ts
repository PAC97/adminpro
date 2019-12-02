import { Component, OnInit } from '@angular/core';
import {user} from '../models/usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {ServiceServicioService} from '../service-servicio.service';
import { element } from 'protractor';
@Component({
  selector: 'app-mas-servicios',
  templateUrl: './mas-servicios.component.html',
  styleUrls: ['./mas-servicios.component.css']
})
export class MasServiciosComponent implements OnInit {
  user: any;
  img: any;
  servicio: any;
  ser: any;
  uses:any;
  pruev:any;
  Servicios=[];
  User:user={
    'Nombres':'',
    'Apellidos':'',
    'Edad':'',
    'Telefono':'',
    'Direccion': '',
    'Correo':'',
    'Password':'',
    'ID_TipoUsuario':'',
    'pathImg': '',
    'Servicios':[''],
    'Estado':true
    }
    sesr= [];
  servicios = [];
  constructor(private service: ServiceServicioService, private route:Router) { }

  ngOnInit() {
   this.obtenerServicios();
   this.getIdUser();
  }
  
  obtenerServicios() {
    this.service.getService()
      .subscribe(ser => {
        this.ser = ser;
        this.pruev = this.ser.servicios;
          
        this.pruev.forEach(element => {
          var items = this.sesr.filter(function (items) {
            return items.nombre == element.nombre;
          })
          
          if(items.length > 0){
           var index:number = this.sesr.indexOf(this.sesr.find(x => x.nombre == element.nombre));
           this.sesr.splice(index, 1);
           
          }
         else{
           this.sesr.push({ nombre: element.nombre, descripcion: element.descripcion, _id: element._id, img: element.pathImage});
           
         }
        });
        console.log(this.sesr);
    })
  }
  getIdUser(){
    this.service.getUser()
    .subscribe(user=>{
      this.uses = user;
      this.Servicios = this.uses.usuario.Servicios;
      this.Servicios.forEach(element => {
        var items = this.sesr.filter(function (items) {
          return items.nombre == element.nombre;
        })
        
        if(items.length > 0){
         var index:number = this.sesr.indexOf(this.sesr.find(x => x.nombre == element.nombre));
         this.sesr.splice(index, 1);
         
        }
       else{
         this.sesr.push({ nombre: element.nombre, descripcion: element.descripcion, _id: element._id});
      
       }
      });
    })
  }
  
  addSer(nombre: string, descripcion: string, _id: string) {
    var items = this.servicios.filter(function (items) {
      return items.nombre == nombre;
    })
    if(items.length > 0){
     var index:number = this.servicios.indexOf(this.servicios.find(x => x.nombre == nombre));
     this.servicios.splice(index, 1);
     
    }
   else{
     this.servicios.push(
       { nombre: nombre, descripcion: descripcion, _id: _id});
     
   }
  }
  add(){
    this.User.Nombres = this.uses.usuario.Nombres;
    this.User.Apellidos = this.uses.usuario.Apellidos;
    this.User.Edad = this.uses.usuario.Edad;
    this.User.Telefono = this.uses.usuario.Telefono;
    this.User.Direccion = this.uses.usuario.Direccion;
    this.User.Correo = this.uses.usuario.Correo;
    this.User.Password = this.uses.usuario.Password;
    this.User.ID_TipoUsuario = this.uses.usuario.ID_TipoUsuario;
    this.User.pathImg = this.uses.usuario.pathImg;
    this.User.Estado = this.uses.usuario.Estado;
    if(this.servicios.length > 0){
    
      this.Servicios.forEach(element => {
        var items = this.servicios.filter(function (items) {
          return items.nombre == element.nombre;
        })
        
        if(items.length > 0){
         var index:number = this.servicios.indexOf(this.servicios.find(x => x.nombre == element.nombre));
         this.servicios.splice(index, 1);
         
        }
       else{
         this.servicios.push({ nombre: element.nombre, descripcion: element.descripcion, _id: element._id});
         
       }
      });
      this.User.Servicios = this.servicios;
      
      this.service.putUsuario(this.User, this.uses.usuario._id)
      .subscribe(us=>{
        
        Swal.fire(
          'Datos agregados con éxito',
          'Sus servicios han sido agregados',
          'success'
        )
        this.route.navigate(['/mis-servicios']);
      }) 
    }
    else{
      Swal.fire(
        'Error',
        'Debe seleccionar al menos un servicio',
        'warning'
      )
    }
  }
}
