import { Component, OnInit } from '@angular/core';
import { userLog, user } from '../pages/usuario/models/usuario';
import {  UsuarioService } from '../services/usuario.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('session');
      localStorage.removeItem('fecha');
  }
  userLog: userLog = {
    'Correo': "",
    'Password': "",
  }
  datos: any;
  private currentUserSubject: BehaviorSubject<user>;
  constructor(private service:  UsuarioService, private route: Router) {
    this.currentUserSubject = new BehaviorSubject<user>(JSON.parse(localStorage.getItem('x-access-token')));
  }
  log() {
    if (this.userLog.Correo != '' && this.userLog.Password != '') {
      this.service.logUser(this.userLog)
        .subscribe(user => {
          this.datos = user;
          console.log(this.datos);
          if (this.datos.data != null) {
            if(this.datos.data.Estado == true){
            localStorage.setItem('x-access-token', this.datos.data.token);
            localStorage.setItem('session', this.datos.data.Usuario);
            localStorage.setItem('fecha', this.datos.data.payload.exp);
            this.currentUserSubject.next(this.datos.data.token);
            //if para validar los servicios 
           
              if (this.datos.data.Rol.nombre == 'Admin') {
                this.route.navigate(['/menu'])
               .then(() => {
                 window.location.reload();
               });
              }
              else if (this.datos.data.Rol.nombre == 'Cliente') {
                if (this.datos.data.Servicios.length >= 1) {
                this.route.navigate(['/inicio'])
               .then(() => {
                window.location.reload();
               });
              }
              else {
                this.route.navigate(['/SeleccionarServicios'])
                .then(() => {
                  window.location.reload();
                });
              }
              }
              else {
                Swal.fire(
                  'Error',
                  'Verificar los datos ingresados',
                  'warning'
                )
              }
           
            //
          }
          else{
            Swal.fire(
              'Al parecer no tienes una cuenta o a sido desabilitada',
              '',
              'warning'
            )
          }
        }
          else {
            Swal.fire(
              'Error',
              'Todos lo datos son requeridos',
              'warning'
            )
            }
        })
      }
  }
}