import { Component, OnInit } from '@angular/core';
//servicio
import {TipoUsuarioService} from '../tipo-usuario.service';
//models
import {tipoUsuario} from '../models/tipoUsuario';
//ritas
import {Router, ActivatedRoute} from '@angular/router';
//alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mod-tipo-usuario',
  templateUrl: './mod-tipo-usuario.component.html',
  styleUrls: ['./mod-tipo-usuario.component.css']
})
export class ModTipoUsuarioComponent implements OnInit {
  
  tipUM:tipoUsuario={
    'nombre':'',
    'descripcion': ''
  }
  ids;
  tipUser:any;
  nombre:string;
  descripcion:any;
  id:any;
  User:any;
  permisos:any;
  user:any;
  ok:any;
  constructor(private service:TipoUsuarioService, private router:Router, private activateRouter:ActivatedRoute) { }

  ngOnInit() {
    //sesion
    var session = localStorage.getItem('x-access-token');
    this.id = localStorage.getItem('session');
    if(session == null){
      this.router.navigate(['../login'])
    }  
    //cachar id del registro
    var id = this.activateRouter.snapshot.paramMap.get('id');
    this.ids = id;
     
    //get id registro
      this.service.getIdtipoUsuario(this.ids)
      .subscribe(tipUs =>{
      this.tipUser = tipUs;
      this.nombre = this.tipUser.tipoUsuario.nombre;
      this.descripcion =  this.tipUser.tipoUsuario.descripcion;
    });
    this.service.getIdUsuario(this.id)
    .subscribe(user=>{
      this.user = user;
      this.permisos = this.user.usuario.Acciones;
    })
  }
  mod(){

    if(this.tipUM.nombre != ''){
      if(this.tipUM.descripcion != ''){
        this.Mensaje();
      }else{
        this.tipUM.descripcion = this.descripcion;
        this.Mensaje();
      }
    } 
    else{
      this.tipUM.nombre = this.nombre;
      if(this.tipUM.descripcion != ''){
        this.Mensaje();
      }
      else{
        this.tipUM.descripcion = this.descripcion;
        this.Mensaje();
      }
    }
  }
  Mensaje(){
    this.permisos.forEach(element => {
      var items = this.permisos.filter( function (items){
        return items.accion == 'Modificar Tipo Usuario'
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
      title: '¿Dese modificar el registro?',
      text: "El registro se modificará",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.service.putTipoUsuario(this.tipUser.tipoUsuario._id, this.tipUM) 
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
      this.router.navigate(['/tipoUsuario']);
      }
    });
  }
  else{
    Swal.fire(
      'Error',
      'No tienes permiso para realizar esta accion',
      'warning'
    )
  }
 }
}
