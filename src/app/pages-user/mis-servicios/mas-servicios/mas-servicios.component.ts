import { Component, OnInit } from '@angular/core';
import {user} from '../models/usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {ServiceServicioService} from '../service-servicio.service';
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
    'Servicios':['']
    }
  servicios = [];
  constructor(private service: ServiceServicioService, private route:Router) { }

  ngOnInit() {
    this.getIdUser();
    this.obtenerServicios();
  }
  getIdUser(){
    this.service.getUser()
    .subscribe(user=>{
      this.uses = user;
      this.Servicios = this.uses.usuario.Servicios;
      console.log(this.Servicios);
    })
  }
  
  obtenerServicios() {
    this.service.getService()
      .subscribe(ser => {
        this.ser = ser;
        this.servicio = this.ser.servicios;
        console.log(this.servicio);
        for(let i=0; i < this.servicio.length; i++){
         console.log(this.servicio[i]);
        }
        for(let i=0; i < this.Servicios.length; i++){
          console.log(this.Servicios[i]);
         }
    })
  }
  addSer(nombre: string) {
    var items = this.servicios.filter(function (items) {
      return items.nombre == nombre;
    })
    if(items.length > 0){
     var index:number = this.servicios.indexOf(this.servicios.find(x => x.nombre == nombre));
     this.servicios.splice(index, 1);
     console.log(this.servicios);
    }
   else{
     this.servicios.push({ nombre: nombre });
     console.log(this.servicios);
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
    if(this.servicios.length > 0){
      this.User.Servicios = this.servicios;
      this.service.putUsuario(this.User, this.uses.usuario._id)
      .subscribe(us=>{
        console.log(us);
        Swal.fire(
          'Datos agregados con exito',
          'Sus servicios se agregaron',
          'success'
        )
        this.route.navigate(['/mis-servicios']);
      })
    }
    else{
      Swal.fire(
        'Error',
        'Debe seleccionar almenos un servicio',
        'warning'
      )
    }
  }
}
