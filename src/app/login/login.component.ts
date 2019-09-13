import { Component, OnInit } from '@angular/core';
import {userLog, user} from '../pages/usuario/models/usuario';
import {serviceUser} from '../services/usuario.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userLog:userLog={
    'Correo':"",
    'Password':"",
  }
  datos:any;
  private currentUserSubject: BehaviorSubject<user>;
  constructor(private service:serviceUser, private route:Router) {
    this.currentUserSubject = new BehaviorSubject<user>(JSON.parse(localStorage.getItem('x-access-token')));
   }
  log(){
    this.service.logUser(this.userLog)
    .subscribe(user=>{
      this.datos = user;
      console.log(this.datos);
      if(this.datos.data.token != null){
        localStorage.setItem('x-access-token', this.datos.data.token);
        localStorage.setItem('session', this.datos.data.Usuario._id);
        this.currentUserSubject.next(this.datos.data.token);
        if(this.datos.data.Usuario.ID_TipoUsuario == "5d66adb6bff7ac1a18287fd8"){

          this.route.navigate(['/menu']);
        }
        else if(this.datos.data.Usuario.ID_TipoUsuario == "5d6ec10bee352216b8b3d421"){
          this.route.navigate(['/inicio'])
        }
        else{
          var errror = "Verificar datos del usuario";
          console.log(errror);
        }
      }
    })
  }
}
