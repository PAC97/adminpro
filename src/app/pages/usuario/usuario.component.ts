import { Component, OnInit } from '@angular/core';
import {UsuarioService} from './usuario.service';
//Alertas
import Swal from 'sweetalert2';
//rutas
import {Router, ActivatedRoute} from '@angular/router';
//models
import {user} from './models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  filter:any; p:any; uses:any; U:any; C:any; ids:any; User:any; Usr:any; A:any;
  users:any;
  id: any;
  Users:any;
  UseAd:any;
  IdAd="5dba5781b65f0f0017e3e6a7";
  idCl="5dbba3eab743d7001769b587";
  Usuario:user={
    '_id':'',
    'Nombres':'',
    'Apellidos':'',
    'Edad':'',
    'Telefono':'',
    'Direccion': '',
    'Correo':'',
    'Password':'',
    'ID_TipoUsuario':'',
    'Servicios':[''],
    'pathImg': '',
    'Region': '',
    'Estado': false
  }
  idA:any;
  permisos:any;
  user:any;
  ok:any;
  constructor(private service: UsuarioService, private router:Router) { }
  
  ngOnInit() {
  this.getUsersC();
  this.getUserA();
  var session = localStorage.getItem('x-access-token');
  this.service.getIdUsuario(this.id)
    .subscribe(user=>{
      this.user = user;
      this.permisos = this.user.usuario.Acciones;
    })
 }
  getUserA(){
    this.service.getUsuarioAd(this.IdAd)
    .subscribe(U=>{
      this.C = U;
      this.UseAd = this.C.usuario;
    
    })
  }
  getUsersC(){
    this.service.getUsuarioAd(this.idCl)
    .subscribe(user=>{
      this.U = user;
      this.uses = this.U.usuario;
    })
  }
  getidUsuario(id:string){
    this.service.getIdUsuario(id)
    .subscribe(ids=>{
      this.Users = ids;
      
      this.ModUsuario();
    })
  }
ModUsuario(){
  Swal.fire({
     title: '¿Desea modificar el registro?',
     text: "El registro se modificará",
     type: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Si',
     cancelButtonText: 'No'
   }).then((result) => {
     if (result.value) {
      this.Usuario.Nombres = this.Users.usuario.Nombres;
      this.Usuario.Apellidos = this.Users.usuario.Apellidos;
      this.Usuario.Edad = this.Users.usuario.Edad;
      this.Usuario.Telefono = this.Users.usuario.Telefono;
      this.Usuario.Direccion = this.Users.usuario.Direccion;
      this.Usuario.Correo = this.Users.usuario.Correo;
      this.Usuario.Password = this.Users.usuario.Password;
      this.Usuario.ID_TipoUsuario = this.Users.usuario.ID_TipoUsuario;
      this.Usuario.Servicios = this.Users.usuario.Servicios;
      this.Usuario.pathImg = this.Users.usuario.pathImg;
      this.Usuario._id = this.Users.usuario._id;
      this.Usuario.Estado = false;

      
      this.service.putUsuario(this.Usuario._id, this.Usuario) 
       .subscribe(
         res => {
         },
         err => console.log(err)
       )
       Swal.fire(
         'Modificado!',
         'El registro se modificó correctamente.',
         'success'
       )
     this.getUsersC();
     }
   });
  }  
  DeleteUsuario(id:string){
    this.permisos.forEach(element => {
      var items = this.permisos.filter( function (items){
        return items.accion == 'Eliminar Tipo Usuario'
      })
      if(items.length > 0){
        this.ok = true;
      }
      else{
        this.ok = false;
      }
    });
    if(this.ok == true){
      Swal.fire({
        title: '¿Desea Eliminar el registro?',
        text: "El registro se Eliminará",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
         this.service.deleteUsuario(id) 
          .subscribe(
            res => {
            },
            err => console.log(err)
          )
          Swal.fire(
            '¡Eliminado!',
            'El registro se eliminó correctamente.',
            'success'
          )
        this.getUsersC();
        }
      });
    }
    else{
    Swal.fire(
      'Error',
      'No tienes permiso para realizar esta acción.',
      'warning'
      )
    } 
  }
}