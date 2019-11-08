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
    'ID_TipoUsuario':'5dba5781b65f0f0017e3e6a7',
    'pathImg': '',
    'Region': '',
    'Estado': true,
    'Acciones':[''],
    'Servicios':[''],
    }
    IDservicio;
    confirm;
    uses:any;
    servicios:any;
    Acciones=[{accion:'Ver'},{accion:'Modificar'},{accion:'Eliminar'},{accion:'Agregar'}];
    sers=[];
    Accion=[];
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
//metodos para seleccionar los roles de los usuarios
addAccion(accion:string){
var items = this.Accion.filter( function (items){
  return items.accion == accion;
})
if(items.length > 0){
 var index:number = this.Accion.indexOf(this.Accion.find(x => x.accion == accion));
 this.Accion.splice(index, 1);
}
else{
 this.Accion.push({ accion: accion});
 }
 console.log(this.Accion)
}
guaAcc(){
  if(this.Accion.length > 0){
    this.User.Acciones = this.Accion;
    console.log(this.User);
  }
  else{
    Swal.fire(
      'Error',
      'Debes seleccionar por lo menos una accion',
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
this.User.pathImg = this.croppedImage;
}
//

add(){
  this.sers.push({nombre:'Admin'});
 this.User.Servicios = this.sers;
  var correo = this.User.Correo;
  var items = this.uses.filter(function(item) {
    return item.Correo == correo;
  });
  if(this.User.Nombres != '' && this.User.Apellidos && this.User.Edad != '' && this.User.Telefono != '' 
  && this.User.Direccion != '' && this.User.Correo != '' && this.User.Password != '' && this.User.pathImg != '' && this.User.Acciones.length > 0){
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
