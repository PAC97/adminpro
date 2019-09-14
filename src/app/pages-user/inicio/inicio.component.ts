import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PublicacionesService } from './services/publicaciones.service';
import { publicaciones } from './models/publicaciones';
//rutas
import { Router } from '@angular/router';
//alerta
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private service: PublicacionesService, private router: Router, private renderer: Renderer2) { }
  publi: publicaciones = {
    'Titulo': '',
    'Descripcion': '',
    'Usuario': ''
  }
  usuario: any;
  modal: any;
  pubb:any;
  ngOnInit() {
    this.usuario = localStorage.getItem('session');
    this.obtenesPublicaciones();
  }
  obtenesPublicaciones(){
    this.service.getPublicaciones()
    .subscribe(pubb =>{
      this.pubb = pubb;
      console.log(this.pubb);
    })
  }
  //buscar
  buscar(event){
    console.log(event);
  }
  //Publicar para cada usuario xd d xd xd xd xd 
  publicar() {
    this.publi.Usuario = this.usuario;
    if (this.publi.Titulo != '' && this.publi.Descripcion != '') {
      this.service.postPublicaciones(this.publi)
      .subscribe(pub =>{
        Swal.fire(
          'Publicacion creada con exito',
          'Publicacion realizada',
          'success'
        )
        console.log(pub);
          this.obtenesPublicaciones();
      })    
    }
    else{
      Swal.fire(
        'Error',
        'Todos los datos son requeridos',
        'warning'
      )
    }
    console.log(this.modal);
  }
}
