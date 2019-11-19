import { Component, OnInit } from '@angular/core';
//servicios
import {TipoServicioService} from '../tipo-servicio.service';
//models
import {tipoServicio} from '../models/tiposervicio';
//rutas
import {Router} from '@angular/router';
//alerta
import Swal from 'sweetalert2';
//crop
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-add-tipo-servicio',
  templateUrl: './add-tipo-servicio.component.html',
  styleUrls: ['./add-tipo-servicio.component.css']
})
export class AddTipoServicioComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  Servicio:tipoServicio={
    'nombre':'',
    'descripcion': '',
    'pathImage': '',
  }
  confirm;
  uses:any;
  servicios:any;
  id:any;
  permisos:any;
  user:any;
  ok:any;
  constructor(private service:TipoServicioService, private router:Router) { }

  ngOnInit() {
    var session = localStorage.getItem('x-access-token');
    if(session == null){
      this.router.navigate(['../login'])
    } 
    this.id = localStorage.getItem('session');
    this.service.getIdUsuario(this.id)
    .subscribe(user=>{
      this.user = user;
      this.permisos = this.user.usuario.Acciones;
    }) 
  }
  Agregar(){
    this.permisos.forEach(element => {
      var items = this.permisos.filter( function (items){
        return items.accion == 'Crear Servicios'
      })
      if(items.length > 0){
        this.ok = true;
      }
      else{
        this.ok = false;
      }
    });
    if(this.ok == true){
      if(this.Servicio.nombre != '' && this.Servicio.descripcion != '' && this.Servicio.pathImage != ""){
        this.service.postTipoServicio(this.Servicio)
        .subscribe(Serv=>{          
          console.log(Serv);
          Swal.fire(
            '¡Servicio Agregado!',
            'El registro se agregó correctamente.',
            'success'
          )
          this.router.navigate(['/servicio']);
        })
     }
     else{
      Swal.fire(
        '¡Verificar los datos ingresados!',
        'El registro debe ir lleno correctamente.',
        'warning'
        )
      }
    }
    else{
      Swal.fire(
        'Error',
        'No tienes permisos para realizar esta acción.',
        'warning'
      )
    }
  }
  //Metodos para las imagenes 
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
foto(){
this.Servicio.pathImage = this.croppedImage;
console.log(this.Servicio);
}
}
