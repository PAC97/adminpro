import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import {user, userLog} from '../pages/usuario/models/usuario';
@Injectable({
  providedIn: 'root'
})
export class serviceUser {
    API_URI = 'http://localhost:3000/api';
    httpheaders:any;
  constructor(private http:HttpClient) { 
     var session = localStorage.getItem('x-access-token');

     this.httpheaders = new HttpHeaders({
     'Content-Type': 'application/json',
     'x-access-token': session
   });
   }
  
  logUser(Userlog:userLog){
      return this.http.post(`${this.API_URI}/autenticacion`, Userlog);
  }
  getTipoUser(){
   return this.http.get(`${this.API_URI}/tipoUsuario`, {headers: this.httpheaders});
  }
}
