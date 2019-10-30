import { Component, OnInit } from '@angular/core';
import {user} from './models/usuario';
import { UsuarioService} from '../../../services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  User: user={
    'Nombres':'',
    'Apellidos':'',
    'Edad':'',
    'Telefono':'',
    'Direccion': '',
    'Correo':'',
    'Password':'',
    'ID_TipoUsuario':'5db1051dc9064971646b675c',
    'pathImg': '',
    'Region': '',
    'Estado': true,
    }
    IDservicio;
    confirm;
    uses:any;
    servicios:any;
  constructor(private service: UsuarioService, private route:Router) { }

  ngOnInit() {
    this.service.getUser()
    .subscribe(user=>{
      this.uses = user;
      
  })
  //Combobox 
  this.service.getService()
  .subscribe(tip=>{
    this.servicios = tip;
    
  })
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
this.User.pathImg = this.croppedImage;

}
//

add(){
  var correo = this.User.Correo;
  var items = this.uses.filter(function(item) {
    return item.Correo == correo;
  });
  
  if(this.User.Nombres != '' && this.User.Apellidos && this.User.Edad != '' && this.User.Telefono != '' 
  && this.User.Direccion != '' && this.User.Correo != '' && this.User.Password != '' && this.User.pathImg != ''){
    if(this.confirm == this.User.Password){
      if(items.length <= 0 ){
        this.service.postUser(this.User)
        .subscribe(user=>{
          if(user != null){
           Swal.fire(
             'Registrado con exito',
             'Para ingresar su correo es: '+ this.User.Correo,
             'success'
           )
           
           this.route.navigate(['/menu']);
          }
        })
       }
       else{
        Swal.fire(
          'Error en el correo',
          'Correo ingresado no es valido o esta siendo ocupado',
          'warning'
        )
       }
      }
 
    else{
      Swal.fire(
        'La contraseña ingresadas no coinciden!!',
        '',
        'warning'
      )
    }
  }
  else{
    Swal.fire(
      'Verificar los datos ingresados!',
      'Todos los campos deben ser llenado.',
      'warning'
    )
  }
}
}
