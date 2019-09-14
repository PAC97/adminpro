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
    id:any;
  constructor(private http:HttpClient) { 
     var session = localStorage.getItem('x-access-token');
     this.id = localStorage.getItem('session');
     this.httpheaders = new HttpHeaders({
     'Content-Type': 'application/json',
     'x-access-token': session
   });
   }
  //
  logUser(Userlog:userLog){
      return this.http.post(`${this.API_URI}/autenticacion`, Userlog);
  }
  //
  postUser(user:user){
   return this.http.post(`${this.API_URI}/usuario`, user);
  }
  //
  getUser(){
    return this.http.get(`${this.API_URI}/usuario`);
  }
  //getServicios
  getService(){
    return this.http.get(`${this.API_URI}/servicio`);
  }
  getIDUser(){
    return this.http.get(`${this.API_URI}/usuario/${this.id}`, {headers: this.httpheaders})
  }
}
