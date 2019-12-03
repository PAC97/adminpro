import { Component, OnInit } from '@angular/core';
//servicio
import { TipoServicioService } from '../tipo-servicio.service';
//models
import { tipoServicio } from '../models/tiposervicio';
//ritas
import { Router, ActivatedRoute } from '@angular/router';
//alertas
import Swal from 'sweetalert2';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-mod-tipo-servicio',
  templateUrl: './mod-tipo-servicio.component.html',
  styleUrls: ['./mod-tipo-servicio.component.css']
})
export class ModTipoServicioComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage = '';
  ids: any;
  tipSer: any;
  nombre: string;
  descripcion: any;
  imgS: any;
  id: any;
  filter: any;
  p: any;
  Servi: tipoServicio = {
    'nombre': '',
    'descripcion': '',
    'pathImage': ''
  }
  User: any;
  permisos: any;
  user: any;
  ok: any;
  idss: any;
  constructor(private service: TipoServicioService, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    //sesion
    var session = localStorage.getItem('x-access-token');
    this.idss = localStorage.getItem('session');
    if (session == null) {
      this.router.navigate(['../login'])
    }
    //cachar id del registro
    var id = this.activateRouter.snapshot.paramMap.get('id');
    this.ids = id;

    //get id registro
    this.service.getIdTipoServicio(this.ids)
      .subscribe(tipServ => {
        this.tipSer = tipServ;
        this.nombre = this.tipSer.servicio.nombre;
        this.descripcion = this.tipSer.servicio.descripcion;
        this.imgS = this.tipSer.servicio.pathImage;
      });
    this.service.getIdUsuario(this.idss)
      .subscribe(user => {
        this.user = user;
        this.permisos = this.user.usuario.Acciones;
      })
  }
  //apartado para modificar las imagenes
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  foto() {
    this.Servi.pathImage = this.croppedImage;
  }
  Mensaje() {
    this.permisos.forEach(element => {
      var items = this.permisos.filter(function (items) {
        return items.accion == 'Modificar Servicios'
      })
      if (items.length > 0) {
        this.ok = true;
      }
      else {
        this.ok = false;
      }
    });
    if (this.ok == true) {
      Swal.fire({
        title: '¿Desea modificar el registro?',
        text: "El registro se modificará",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
           this.service.putTipoServicio(this.tipSer.servicio._id, this.Servi)
            .subscribe(
              res => {
              },
            )
          Swal.fire(
            'Modificado!',
            'El registro se modificó correctamente.',
            'success'
          )
          this.router.navigate(['/servicio']);
        }
      });
    }
    else {
      Swal.fire(
        'Error',
        'No tienes permiso para realizar esta acción.',
        'warning'
      )
    }
  }
  mod() {
    if (this.Servi.nombre != '') {
      if (this.Servi.descripcion != '') {
        if (this.Servi.pathImage != '') {
          this.Mensaje();
        } else {
          this.Servi.pathImage = this.imgS;
          this.Mensaje();
        }
      } else {
        this.Servi.descripcion = this.descripcion;
        if (this.Servi.pathImage != '') {
          this.Mensaje;
        } else {
          this.Servi.pathImage = this.imgS;
          this.Mensaje;
        }
      }
    } else {
      this.Servi.nombre = this.nombre;
      if (this.Servi.descripcion != '') {
        if (this.Servi.pathImage != '') {
          this.Mensaje;
        }
        else {
          this.Servi.pathImage = this.imgS;
          this.Mensaje;
        }
      }
      else {
        this.Servi.descripcion = this.descripcion;
        if (this.Servi.pathImage != '') {
          this.Mensaje;
        }
        else {
          this.Servi.pathImage = this.imgS;
          this.Mensaje;
        }
      }
    }
  }

  //   if(this.Servi.nombre != ''){
  //     if(this.Servi.descripcion != ''){
  //       this.Mensaje();
  //     }else{
  //       this.Servi.descripcion = this.descripcion;
  //       this.Mensaje();
  //     }
  //   } 
  //   else{
  //     this.Servi.nombre = this.nombre;
  //     if(this.Servi.descripcion != ''){
  //       this.Mensaje();
  //     }
  //     else{
  //       this.Servi.descripcion = this.descripcion;
  //       this.Mensaje();
  //     }
  //   }
  // }
}
