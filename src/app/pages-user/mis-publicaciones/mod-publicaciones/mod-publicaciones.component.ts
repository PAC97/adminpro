import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//alerta
import Swal from 'sweetalert2';
//service
import { ServiceService } from '../service/service.service';
//Model
import {publicaciones} from '../models/publicaciones';

@Component({
  selector: 'app-mod-publicaciones',
  templateUrl: './mod-publicaciones.component.html',
  styleUrls: ['./mod-publicaciones.component.css']
})
export class ModPublicacionesComponent implements OnInit {

  constructor(private router: Router, private activateRouter: ActivatedRoute, private service: ServiceService) { }
  id: any;
  publi: any;
  o: any;
  public: publicaciones = {
    'Titulo': '',
    'Descripcion': '',
    'Usuario': '',
    'Fecha': new Date,
  }
  ngOnInit() {
    var session = localStorage.getItem('x-access-token');
    if (session == null) {
      this.router.navigate(['../login'])
    }
    this.id = this.activateRouter.snapshot.paramMap.get('id')
    
    this.getid();
  }
  //publi id
  getid() {
    this.service.getIdpublicacion(this.id)
      .subscribe(da => {
        this.o = da
        this.publi = this.o.publicacion;
        
      })
  }
  //Alerta modifacion
  guardarModificacion(){
    Swal.fire({
      title: '¿Desea modificar la publicación?',
      text: "La publicación se modificará",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.service.putPublicacion(this.public, this.publi._id) 
        .subscribe(
          res => {
          },
        )
        Swal.fire(
          'Modificado!',
          'La publicación se modificó correctamente.',
          'success'
        )
      this.router.navigate(['/mis-publicaciones']);
      }
    });
  }
  //modificar
  modificar() {
    if (this.public.Titulo != '' && this.public.Descripcion != '') {
      this.public.Fecha = this.publi.Fecha;
      this.public.Usuario = this.publi.Usuario;
      this.guardarModificacion();
    }
    else if(this.public.Titulo == '' && this.public.Descripcion != ''){
      this.public.Titulo = this.publi.Titulo;
      this.public.Fecha = this.publi.Fecha;
      this.public.Usuario = this.publi.Usuario;
      this.guardarModificacion();
    }
    else if(this.public.Titulo != '' && this.public.Descripcion == ''){
      this.public.Descripcion = this.publi.Descripcion;
      this.public.Fecha = this.publi.Fecha;
      this.public.Usuario = this.publi.Usuario;
      this.guardarModificacion();
  
    }
    else {
      this.public.Titulo = this.publi.Titulo;
      this.public.Descripcion = this.publi.Descripcion;
      this.public.Fecha = this.publi.Fecha;
      this.public.Usuario = this.publi.Usuario;
      this.guardarModificacion();
    }
  }
}
