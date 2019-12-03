import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service/service-admin.service';
import { user, userLog } from '../models/usuario';

import { Router, ActivatedRoute } from '@angular/router';
//alerta
import Swal from 'sweetalert2';
//imagen
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-mod-cuenta',
  templateUrl: './mod-cuenta.component.html',
  styleUrls: ['./mod-cuenta.component.css']
})
export class ModCuentaComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  user: any;
  us: any;
  nombre: any;
  apellido: any;
  telefono: any;
  direccion: any;
  edad: any;
  img:any;
  User: user = {
    'Nombres':'',
    'Apellidos':'',
    'Edad':'',
    'Telefono':'',
    'Direccion': '',
    'Correo':'',
    'Password':'',
    'ID_TipoUsuario':'',
    'Servicios':'',
    'pathImg': '',
    'Region': 'Sonsonate',
    'Estado': true
  }
  pass = "";
  confirPass = "";
  valid: userLog = {
    'Correo': '',
    'Password': ''
  }
  pasEcual: any;
  constructor(private router: Router, private service: ServiceUserService) { }

  ngOnInit() {
    this.getUsuario();
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
foto(){
this.User.pathImg = this.croppedImage;
this.modifica();
}
//Datos de ese usuario 
getUsuario() {
  this.service.getIDUser()
    .subscribe(user => {
      this.user = user;
      this.us = this.user.usuario;
      this.nombre = this.us.Nombres;
      this.apellido = this.us.Apellidos;
      this.telefono = this.us.Telefono;
      this.direccion = this.us.Direccion;
      this.edad = this.us.Edad;
      this.img = this.us.pathImg;
    })
}

//Metodo para validar la modificcacion
guardarModificacion() {
  Swal.fire({
    title: '¿Desea modificar su usuario?',
    text: "El registro se modificará",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.value) {
      console.log(this.User);
      this.service.putUsuario(this.User, this.us._id)
        .subscribe(
          res => {
           
          },
          err => console.log(err)
        )
      Swal.fire(
        'Modificado!',
        'El usuario se modificó correctamente.',
        'success'
      )
      this.getUsuario();
    }
  });
}
validarPass() {
  this.valid.Password = this.pass;
  this.valid.Correo = this.us.Correo;
  this.service.logUser(this.valid)
    .subscribe(pass => {
      this.pasEcual = pass;
      
      if (this.pasEcual.status == 'Success') {
        if (this.pass == this.confirPass) {
          Swal.fire(
            '¡Contraseña invalida!',
            'La contraseña debe ser diferente a la actual',
            'warning'
          )
        }
        else {
          this.User.Password = this.confirPass;
          this.modifica();
          this.confirPass = '';
          this.pass = '';
        }
      }
      else {
        Swal.fire(
          '¡Contraseña invalida!',
          'La contraseña ingresada no coincide con la ya utilizada',
          'warning'
        )
      }
    })
}

//Modificar
modifica() {
  this.User.Correo = this.us.Correo;
  this.User.Servicios = this.us.Servicios;
  this.User.ID_TipoUsuario = this.us.ID_TipoUsuario;
  this.User.Estado = this.us.Estado;
  //If para nombres
  if (this.User.Nombres != '') {
    //If para apellidos
    if (this.User.Apellidos != '') {
      if (this.User.Direccion != '') {
        if (this.User.Password != '') {
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
             if(this.User.pathImg != ''){
               this.guardarModificacion();
             }
             else{
               this.User.pathImg = this.us.pathImg;
               this.guardarModificacion();
             }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
        else {
          this.User.Password = this.us.Password;
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
      }
      else {
        this.User.Direccion = this.us.Direccion;
        if (this.User.Password != '') {
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
        else {
          this.User.Password = this.us.Password;
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
      }
    }
    //else para apellidos
    else {
      this.User.Apellidos = this.us.Apellidos;
      if (this.User.Direccion != '') {
        if (this.User.Password != '') {
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
        else {
          this.User.Password = this.us.Password;
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
      }
      else {
        this.User.Direccion = this.us.Direccion;
        if (this.User.Password != '') {
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
        else {
          this.User.Password = this.us.Password;
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
      }
    }
  }
  //Else para nombre
  else {
    this.User.Nombres = this.us.Nombres;
    //If para apelledos
    if (this.User.Apellidos != '') {
      if (this.User.Direccion != '') {
        if (this.User.Password != '') {
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
        else {
          this.User.Password = this.us.Password;
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
      }
      else {
        this.User.Direccion = this.us.Direccion;
        if (this.User.Password != '') {
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
        else {
          this.User.Password = this.us.Password;
           if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
      }
    }
    //Else para apellidos
    else {
      this.User.Apellidos = this.us.Apellidos;
      if (this.User.Direccion != '') {
        if (this.User.Password != '') {
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
        else {
          this.User.Password = this.us.Password;
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
      }
      else {
        this.User.Direccion = this.us.Direccion;
        if (this.User.Password != '') {
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
        else {
          this.User.Password = this.us.Password;
          if (this.User.Edad != '') {
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
          else {
            this.User.Edad = this.us.Edad;
            if (this.User.Telefono != '') {
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
            else {
              this.User.Telefono = this.us.Telefono;
              if(this.User.pathImg != ''){
                this.guardarModificacion();
              }
              else{
                this.User.pathImg = this.us.pathImg;
                this.guardarModificacion();
              }
            }
          }
        }
      }
    }
  }
  }
}
