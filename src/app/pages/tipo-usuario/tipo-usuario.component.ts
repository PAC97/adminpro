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
  tipoUsario:any;
  tips:any;
  constructor(private service:TipoUsuarioService, private router:Router) { }

  ngOnInit() {
    this.obtenerTipoUsuario();
    var session = localStorage.getItem('x-access-token');
    if(session == null){
      this.router.navigate(['../login'])
    }
  }
  obtenerTipoUsuario(){
    this.service.getTipoUsuario()
    .subscribe(tip=>{
      this.tips=tip;
      this.tipoUsario=this.tips.tipoUsuario;
      console.log(this.tipoUsario);
      if(this.tipoUsario.mensaje == "no tienes autorizacion"){
        this.router.navigate(['../login'])
      }
    })
  };
  DeleteTipoUsuario(id:string){
    Swal.fire({
      title: '¿Dese eliminar el registro?',
      text: "Al eliminar no se podra recuperar el registro!",
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
}
