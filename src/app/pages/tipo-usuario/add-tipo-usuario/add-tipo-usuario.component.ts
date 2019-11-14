import { Component, OnInit } from '@angular/core';
//servicios
import {TipoUsuarioService} from '../tipo-usuario.service';
//models
import {tipoUsuario} from '../models/tipoUsuario';
//rutas
import {Router} from '@angular/router';
//alerta
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tipo-usuario',
  templateUrl: './add-tipo-usuario.component.html',
  styleUrls: ['./add-tipo-usuario.component.css']
})
export class AddTipoUsuarioComponent implements OnInit {

  tipU:tipoUsuario={
    'nombre':'',
    'descripcion': ''
  }
  id:any;
  permisos:any;
  user:any;
  ok:any;
  constructor(private service:TipoUsuarioService, private router:Router) { }

  ngOnInit() {
    var session = localStorage.getItem('x-access-token');
    if(session == null){
      this.router.navigate(['../login'])
    }  
    this.id = localStorage.getItem('session');
    this.service.getIdUsuario(this.id)
    .subscribe(user=>{
      this.user = user;
      this.permisos = this.user.usuario.Acciones;
    })
  }
  Agregar(){
    this.permisos.forEach(element => {
    var items = this.permisos.filter( function (items){
      return items.accion == 'Agregar Tipo Usuario'
    })
    if(items.length > 0){
      this.ok = true;
    }
    else{
      this.ok = false;
    }
  });
  if(this.ok == true){
    
   if(this.tipU.nombre != '' && this.tipU.descripcion != ''){
      this.service.postTipoUsuario(this.tipU)
      .subscribe(tipoU=>{
        
          Swal.fire(
            'Usuario Agregado!',
            'El registro se agregó correctamente.',
            'success'
          )
          this.router.navigate(['/tipoUsuario']);
      })
   }
    else{
      Swal.fire(
        'Verificar los datos ingresados!',
        'El registro debe ir lleno correctamente.',
        'warning'
      )
    }
  }else{
    Swal.fire(
      'Error',
      'No tienes permiso para realizar esta accion',
      'warning'
    )
  }
 }
}
