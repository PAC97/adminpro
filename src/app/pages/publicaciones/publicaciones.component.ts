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
  filter: any;
  p:any;
  Publicaciones: any;
  pul:any;
  permisos:any;
  user:any;
  id:any;
  ok:any;
  constructor(private service: PublicacionesService, private router:Router) {}

  ngOnInit() {

    var session = localStorage.getItem('x-access-token');
    this.id = localStorage.getItem('session');
    if (session == null){
      this.router.navigate(['../login'])
    }
    // this.service.getIdUsuario(this.id)
    // .subscribe(user=>{
    //   this.user = user;
    //   this.permisos = this.user.usuario.Acciones;
    // })
    this.Obtenerpublicaciones();
  }
  Obtenerpublicaciones(){
    this.service.getPublicaciones()
    .subscribe(pub=>{
      this.pul = pub;
      this.Publicaciones = this.pul.publicaciones;
      
      if(this.Publicaciones.mensaje == "no tiene autorización"){
        this.router.navigate(['../login'])
      }
    })
  };
  Eliminarpublicaciones(id: string){
    this.permisos.forEach(element => {
      var items = this.permisos.filter( function (items){
        return items.accion == 'Eliminar Publicaciones'
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
        title: '¿Desea eliminar la publicación?',
        text: "¡Al eliminar no se podrá recuperar la publicación!",
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
            'La publicación se eliminó correctamente',
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
