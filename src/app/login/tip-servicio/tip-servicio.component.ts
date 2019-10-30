import { Component, OnInit } from '@angular/core';
import {  UsuarioService } from '../../services/usuario.service';
import {user} from '../models/usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tip-servicio',
  templateUrl: './tip-servicio.component.html',
  styleUrls: ['./tip-servicio.component.css']
})
export class TipServicioComponent implements OnInit {
  user: any;
  img: any;
  servicio: any;
  ser: any;
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
    'Estado': true
    }
  servicios = [];
  constructor(private service:  UsuarioService, private route:Router){ }

  ngOnInit() {

    this.service.getIDUser()
      .subscribe(user => {
        this.user = user;
        this.img = this.user.usuario.pathImg;
      });
    this.obtenerServicios();
  }
  obtenerServicios() {
    this.service.getService()
      .subscribe(ser => {
        this.ser = ser;
        this.servicio = this.ser.servicios;
        
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
     this.servicios.push({ nombre: nombre, descripcion: descripcion, _id: _id});
   }
  }
  add(){
    this.User.Nombres = this.user.usuario.Nombres;
    this.User.Apellidos = this.user.usuario.Apellidos;
    this.User.Edad = this.user.usuario.Edad;
    this.User.Telefono = this.user.usuario.Telefono;
    this.User.Direccion = this.user.usuario.Direccion;
    this.User.Correo = this.user.usuario.Correo;
    this.User.Password = this.user.usuario.Password;
    this.User.ID_TipoUsuario = this.user.usuario.ID_TipoUsuario;
    this.User.pathImg = this.user.usuario.pathImg;
    this.User.Estado = this.user.usuario.Estado;
    if(this.servicios.length > 0){
      this.User.Servicios = this.servicios;
      this.service.putUsuario(this.User, this.user.usuario._id)
      .subscribe(us=>{
        
        Swal.fire(
          'Datos agregados con exito',
          'Sus servicios se agregaron',
          'success'
        )
        this.route.navigate(['/inicio']);
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
