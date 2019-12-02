import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';
//Alertas
import Swal from 'sweetalert2';
//rutas
import {Router, ActivatedRoute} from '@angular/router';
//models
import {user} from '../models/usuario';

@Component({
  selector: 'app-usuario-ad',
  templateUrl: './usuario-ad.component.html',
  styleUrls: ['./usuario-ad.component.css']
})
export class UsuarioAdComponent implements OnInit {
  filter:any; p:any; uses:any; U:any; C:any; ids:any; User:any; Usr:any;
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
  pag = "";
  constructor(private service: UsuarioService, private router:Router) { }
  
  ngOnInit() {
 // this.getUserA();
  var session = localStorage.getItem('x-access-token');
  this.id = localStorage.getItem('session');
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
      this.pag = "2";
      console.log(this.UseAd);
    })
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
            this.getUserA();
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