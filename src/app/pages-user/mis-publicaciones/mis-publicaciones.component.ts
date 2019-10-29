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
  filter:any;
  p:any;
  ids;
  usuario: any;
  pubb: any;
  idPu:any;
  publica:any;
  pu:any;
  Message=0;
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
      this.publica = pu;
      this.pu = this.publica.publicaciones;
      console.log(this.pu);
      if(this.pu.length > 0){
        this.pubb = this.pu;
        console.log(this.pubb);
      }
      else{
        this.Message = 1;
      }
     
    })
  }
  //Eliminar
  eliminarPu(id: string) {{}
   Swal.fire({
      title: '¿Desea eliminar la publicación?',
      text: "Al eliminar no se podrá recuperar la publicación!",
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
          'La publicación se elimino correctamente.',
          'success'
        )
      }
    });
  }

}
