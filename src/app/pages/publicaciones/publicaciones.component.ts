import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from './publicaciones.service';
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  Publicaciones: any;
  pul:any;
  constructor(private service: PublicacionesService, private router:Router) {}

  ngOnInit() {
    this.Obtenerpublicaciones();
    var session = localStorage.getItem('x-access-token');
    if (session == null){
      this.router.navigate(['../login'])
    }
  }
  Obtenerpublicaciones(){
    this.service.getPublicaciones()
    .subscribe(pub=>{
      this.pul = pub;
      this.Publicaciones = this.pul.publicaciones;
      console.log(this.Publicaciones);
      if(this.Publicaciones.mensaje == "no tiene autorización"){
        this.router.navigate(['../login'])
      }
    })
  };
  Eliminarpublicaciones(id: string){
    Swal.fire({
      title: '¿Desea eliminar el registro?',
      text: "¡Al eliminar no se podrá recuperar el registro!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!',
      cancelButtonText: '¡No, cancelar!'
    }).then((result) =>{
      if (result.value) {
        this.service.deletepublicaciones(id)
        .subscribe(
          res => {
            return this.Obtenerpublicaciones();
          },
          err => console.log(err)
        )
        Swal.fire(
          '¡Eliminado!',
          'El registro se eliminó correctamente',
          'success'
        )
      }
    });
  }
}
