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

 Servicio:any;
  constructor(private service:TipoServicioService, private router:Router) { }

  ngOnInit() {
    this.obtenerServicio();
    var session = localStorage.getItem('x-access-token');
    if(session == null){
      this.router.navigate(['../login'])
    }
  }
  obtenerServicio(){
    this.service.getTipoServicio()
    .subscribe(tip=>{
      this.Servicio=tip;
      console.log(this.Servicio);
      if(this.Servicio.mensaje == "no tienes autorizacion"){
        this.router.navigate(['../login'])
      }
    })
  };
  DeleteServicio(id:string){
    Swal.fire({
      title: '¿Dese eliminar el registro?',
      text: "Al eliminar no se podra recuperar el registro!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.value) {
        this.service.deleteServicio(id)
        .subscribe(
          res => {
          return this.obtenerServicio();
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

}
