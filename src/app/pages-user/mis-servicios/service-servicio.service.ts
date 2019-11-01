import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import {user} from './models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceServicioService {
  API_URI ='https://desempla2.herokuapp.com/api';
  httpheaders: any;
  usuario: any;
  constructor(private http: HttpClient) {
    var session = localStorage.getItem('x-access-token');
    this.usuario = localStorage.getItem('session');
    this.httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': session
    });
  }
  getUser() {
    return this.http.get(`${this.API_URI}/usuario/${this.usuario}`, { headers: this.httpheaders });
  }
  putUsuario(user:user, id:string){
    return this.http.put(`${this.API_URI}/usuario/${id}`,user, {headers: this.httpheaders})
  }
  getIDUser(){
    return this.http.get(`${this.API_URI}/usuario/${this.usuario}`, {headers: this.httpheaders})
  }
  getService(){
    return this.http.get(`${this.API_URI}/servicio`);
  }
}
