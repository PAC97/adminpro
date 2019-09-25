import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {user, userLog} from '../models/usuario'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {
  API_URI = 'http://localhost:3000/api';
  httpheaders:any;
  id:any;
  constructor(private http:HttpClient) {     
  this.id = localStorage.getItem('session');
  var session = localStorage.getItem('x-access-token');
  this.httpheaders = new HttpHeaders({
  'Content-Type': 'application/json',
  'x-access-token': session
  });
 }
 getIDUser(){
  return this.http.get(`${this.API_URI}/usuario/${this.id}`, {headers: this.httpheaders})
  }
  putUsuario(user:user, id:string){
    return this.http.put(`${this.API_URI}/usuario/${id}`,user, {headers: this.httpheaders})
  }
  logUser(Userlog:userLog){
    return this.http.post(`${this.API_URI}/autenticacion`, Userlog);
}
}
