import { Component, OnInit } from '@angular/core';
//servicios
import {TipoUsuarioService} from './tipo-usuario.service';
//Alertas
import Swal from 'sweetalert2';
//rutas
import {Router} from '@angular/router';


@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent implements OnInit {
  filter:any;
  p:any;
  tipoUsario:any;
  tips:any;
  permisos:any;
  user:any;
  id:any;
  ok:any;
  constructor(private service:TipoUsuarioService, private router:Router) { }

  ngOnInit() {
  
    var session = localStorage.getItem('x-access-token');
    this.id = localStorage.getItem('session');
    if(session == null){
      this.router.navigate(['../login'])
    }
    this.service.getIdUsuario(this.id)
    .subscribe(user=>{
      this.user = user;
      this.permisos = this.user.usuario.Acciones;
    })
    
    this.obtenerTipoUsuario();
  }
  obtenerTipoUsuario(){
    this.service.getTipoUsuario()
    .subscribe(tip=>{
      this.tips=tip;
      this.tipoUsario=this.tips.tipoUsuario;
      if(this.tipoUsario.mensaje == "no tienes autorizacion"){
        this.router.navigate(['../login'])
      }
    })
  };
  DeleteTipoUsuario(id:string){
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
      title: '¿Desea eliminar el registro?',
      text: "Al eliminar no se podrá recuperar el registro!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.value) {
        
        this.service.deleteTipoUsuario(id)
        .subscribe(
          res => {
          return this.obtenerTipoUsuario();
          },
          err => console.log(err)
        )
        Swal.fire(
          'Eliminado!',
          'El registro se elimino correctamente.',
          'success'
        )
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
