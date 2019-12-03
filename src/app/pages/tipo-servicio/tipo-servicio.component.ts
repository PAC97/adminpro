import { Component, OnInit } from '@angular/core';
//servicios
import {TipoServicioService} from './tipo-servicio.service';
//Alertas
import Swal from 'sweetalert2';
//rutas
import {Router} from '@angular/router';

@Component({
  selector: 'app-tipo-servicio',
  templateUrl: './tipo-servicio.component.html',
  styleUrls: ['./tipo-servicio.component.css']
})
export class ServicioComponent implements OnInit {
  filter:any;
  p:any;
  Servicio:any;
  ser:any;
  permisos:any;
  user:any;
  id:any;
  ok:any;

  constructor(private service:TipoServicioService, private router:Router) { }

  ngOnInit() {
    this.obtenerServicio();
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
  obtenerServicio(){
    this.service.getTipoServicio()
    .subscribe(tip=>{
      this.ser = tip;
      this.Servicio=this.ser.servicios;
      console.log(this.Servicio);
      if(this.Servicio.mensaje == "No tienes autorización"){
      if(this.Servicio.mensaje == "no tienes autorizacion"){
        this.router.navigate(['../login'])
      }
    })
  };
  DeleteServicio(id:string){
    this.permisos.forEach(element => {
      var items = this.permisos.filter( function (items){
        return items.accion == 'Eliminar Servicios'
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
        title: '¿Desea eliminar el servicio?',
        text: "Al eliminar no se podrá recuperar el servicio!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar!',
        cancelButtonText: '¡No, Cancelar!'
      }).then((result) => {
        if (result.value) {
          this.service.deleteServicio(id)
          .subscribe(
            res => {
            return this.obtenerServicio();
            },
          )
          Swal.fire(
            'Eliminado!',
            'El servicio se eliminó correctamente.',
            'success'
          )
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
