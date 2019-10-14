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
  uses:any;
  ids:any;
  User:any;
  Usr:any;
  users:any;
  id: any;
  Users:any;
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
  constructor(private service: UsuarioService, private router:Router) { }

  ngOnInit() {
  this.getUsers();
  }
  getUsers(){
    this.service.getUsuario()
    .subscribe(user=>{
      this.uses = user;
      console.log(this.uses);
    })
  }
  getidUsuario(id:string){
    this.service.getIdUsuario(id)
    .subscribe(ids=>{
      this.Users = ids;
      console.log(this.Users);
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

      console.log(this.Usuario);
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
     this.getUsers();
     }
   });
  }  
}