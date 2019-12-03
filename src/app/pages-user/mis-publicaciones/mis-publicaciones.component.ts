import { Component, OnInit } from '@angular/core';
//rutas
import { Router, ActivatedRoute } from '@angular/router';
//alerta
import Swal from 'sweetalert2';
//service
import { ServiceService } from './service/service.service';
import { comentarios } from '../inicio/models/publicaciones';


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
  Con:any;
  com:comentarios={
    'ID_Usuario':'',
    'ID_Publicacion':'',
    'Comentario':''
  }
  user: any;
  img: any;
  usuarios:any;
  ms:any;
  comen="";
  constructor(private router: Router, private activateRouter: ActivatedRoute, private service: ServiceService) { }

  ngOnInit() {
    var session = localStorage.getItem('x-access-token');
    this.usuarios = localStorage.getItem('session');
    if (session == null) {
      this.router.navigate(['../login'])
    }
    this.obtenerMyPubli();
    this.getUser();
  }
  getUser() {
    this.service.getIDUser()
      .subscribe(user => {
        this.user = user;
        this.img = this.user.usuario.pathImg;
      });
  }
  //Obtener
  obtenerMyPubli(){
    this.service.getPublicacionporUsuario()
    .subscribe(pu => {
      this.publica = pu;
      this.pu = this.publica.publicaciones;
      
      if(this.pu.length > 0){
        this.pubb = this.pu;
        
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
          'La publicación se eliminó correctamente.',
          'success'
        )
      }
      this.obtenerMyPubli();
    });
  }
  getComentarios(id: string) {
      this.service.getComentarios(id)
      .subscribe(co => {
        this.Con = co;
        console.log(this.Con);
      })
  }
  addComentarios(idP: string) {
      this.com.ID_Publicacion = idP;
      this.com.ID_Usuario = this.usuarios;
     if (this.com.ID_Publicacion != '' && this.com.ID_Usuario != '' && this.com.Comentario != '') {
        this.service.postComentarios(this.com)
          .subscribe(con => {
            Swal.fire(
              'comentario agregado',
              'Su comentario se agregó exitosamente',
              'success'
            )
            this.getComentarios(this.com.ID_Publicacion);
            this.com.Comentario = "";
            this.com.ID_Publicacion = "";
            this.com.ID_Usuario = "";
            console.log(this.com);
          })
      }
      else {
        Swal.fire(
          'Error',
          'Debes de llenar el campo de comentario',
          'warning'
        )
      }
  }
  getidCom(id: string) {
    console.log(id);
    this.com.Comentario = "";
    this.service.getIDComentarios(id)
      .subscribe(s => {
        this.ms = s;
        this.comen = this.ms.Comentario;
        console.log(s);
      })
  }
  mod() {
    this.com.ID_Publicacion = this.ms.ID_Publicacion;
    this.com.ID_Usuario = this.ms.ID_Usuario;
    console.log(this.com);
   if (this.com.Comentario != '') {
      Swal.fire({
        title: '¿Desea modificar el comentario?',
        text: "Al modificar no se podrá recuperar el comentario!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, borrar!',
        cancelButtonText: 'No, Cancelar'
      }).then((result) => {
        if (result.value) {
          this.service.puComentario(this.ms._id, this.com)
            .subscribe(
              res => {
                return this.getComentarios(this.ms.ID_Publicacion);
              },
              err => console.log(err)
            )
          Swal.fire(
            'Modificado!',
            'El comentario se modificó correctamente.',
            'success'
          )
          this.com.Comentario = "";
          this.com.ID_Publicacion = "";
          this.com.ID_Usuario = "";
        }
      });
    }
    else {
      this.com.Comentario = this.ms.Comentario;
      Swal.fire({
        title: '¿Desea modificar el comentario?',
        text: "Al modificar no se podrá recuperar el comentario!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, borrar!',
        cancelButtonText: 'No, Cancelar'
      }).then((result) => {
        if (result.value) {
          this.service.puComentario(this.ms._id, this.com)
            .subscribe(
              res => {
                return this.getComentarios(this.ms.ID_Publicacion);
              },
              err => console.log(err)
            )
          Swal.fire(
            'Modificado!',
            'El comentario se modificó correctamente.',
            'success'
          )
          this.com.Comentario = "";
          this.com.ID_Publicacion = "";
          this.com.ID_Usuario = "";
        }
      });
    }
  }
  eliComentario(id: string, idP: string) {
    Swal.fire({
      title: '¿Desea eliminar el comentario?',
      text: "Al eliminar no se podrá recuperar el comentario!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.value) {
        this.service.deleteComentarios(id)
          .subscribe(
            res => {
              return this.getComentarios(idP);
            },
            err => console.log(err)
          )
        Swal.fire(
          'Eliminado!',
          'El comentario se eliminó correctamente.',
          'success'
        )
      }
    });
  }
}
