import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service/service-user.service';
import { user, userLog } from '../models/usuario';

import { Router, ActivatedRoute } from '@angular/router';
//alerta
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mod-cuenta',
  templateUrl: './mod-cuenta.component.html',
  styleUrls: ['./mod-cuenta.component.css']
})
export class ModCuentaComponent implements OnInit {
  user: any;
  us: any;
  nombre: any;
  apellido: any;
  telefono: any;
  direccion: any;
  edad: any;
  User: user = {
    'Nombres': '',
    'Apellidos': '',
    'Telefono': '',
    'Direccion': '',
    'Correo': '',
    'ID_TipoUsuario': '',
    'ID_Servicio': '',
    'Edad': '',
    'Password': '',
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
        console.log(this.us)
      })
  }
  //Modificar
  modifica() {
    this.User.Correo = this.us.Correo;
    this.User.ID_Servicio = this.us.ID_Servicio;
    this.User.ID_TipoUsuario = this.us.ID_TipoUsuario;
    //If para nombres
    if (this.User.Nombres != '') {
      //If para apellidos
      if (this.User.Apellidos != '') {
        if (this.User.Direccion != '') {
          if (this.User.Password != '') {
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
          else {
            this.User.Password = this.us.Password;
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
        }
        else {
          this.User.Direccion = this.us.Direccion;
          if (this.User.Password != '') {
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
          else {
            this.User.Password = this.us.Password;
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
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
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
          else {
            this.User.Password = this.us.Password;
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
        }
        else {
          this.User.Direccion = this.us.Direccion;
          if (this.User.Password != '') {
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
          else {
            this.User.Password = this.us.Password;
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
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
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
          else {
            this.User.Password = this.us.Password;
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
        }
        else {
          this.User.Direccion = this.us.Direccion;
          if (this.User.Password != '') {
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
          else {
            this.User.Password = this.us.Password;
            console.log(this.User); if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
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
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
          else {
            this.User.Password = this.us.Password;
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
        }
        else {
          this.User.Direccion = this.us.Direccion;
          if (this.User.Password != '') {
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
          else {
            this.User.Password = this.us.Password;
            if (this.User.Edad != '') {
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
            else {
              this.User.Edad = this.us.Edad;
              if (this.User.Telefono != '') {
                this.guardarModificacion();
                console.log(this.User)
              }
              else {
                this.User.Telefono = this.us.Telefono;
                this.guardarModificacion();
                console.log(this.User)
              }
            }
          }
        }
      }
    }

  }
  //Metodo para validar la modificcacion
  guardarModificacion() {
    Swal.fire({
      title: '¿Dese modificar su usuario?',
      text: "El registro se modificara",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.service.putUsuario(this.User, this.us._id)
          .subscribe(
            res => {
              console.log(res)
            },
            err => console.log(err)
          )
        Swal.fire(
          'Modificado!',
          'El usuario se modifico correctamente.',
          'success'
        )
      }
    });
  }
  validarPass() {
    this.valid.Password = this.pass;
    this.valid.Correo = this.us.Correo;
    this.service.logUser(this.valid)
      .subscribe(pass => {
        this.pasEcual = pass;
        console.log(this.pasEcual);
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
}
