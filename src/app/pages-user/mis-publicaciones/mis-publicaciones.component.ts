import { Component, OnInit } from '@angular/core';
//rutas
import { Router, ActivatedRoute } from '@angular/router';
//alerta
import Swal from 'sweetalert2';
//service
import { ServiceService } from './service/service.service';


@Component({
  selector: 'app-mis-publicaciones',
  templateUrl: './mis-publicaciones.component.html',
  styleUrls: ['./mis-publicaciones.component.css']
})
export class MisPublicacionesComponent implements OnInit {
  ids;
  usuario: any;
  pubb: any;
  idPu:any;
  pu:any;
  constructor(private router: Router, private activateRouter: ActivatedRoute, private service: ServiceService) { }

  ngOnInit() {
    var session = localStorage.getItem('x-access-token');
    if (session == null) {
      this.router.navigate(['../login'])
    }
    this.obtenerMyPubli();
  }
  //Obtener
  obtenerMyPubli(){
    this.service.getPublicacionporUsuario()
    .subscribe(pu => {
      this.pubb = pu;
      console.log(this.pubb);
    })
  }
  //Eliminar
  eliminarPu(id: string) {{}
   Swal.fire({
      title: '¿Dese eliminar la publicacion?',
      text: "Al eliminar no se podra recuperar la publicacion!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.value) {
        this.service.DeltePublicaciones(id)
          .subscribe(
            res => {
              this.obtenerMyPubli()
            },  
            err => console.log(err)
          )
        Swal.fire(
          'Eliminado!',
          'La publicacion se elimino correctamente.',
          'success'
        )
      }
    });
  }

}
