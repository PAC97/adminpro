import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesPubliCuentaService {
  API_URI = 'https://desempla2.herokuapp.com/api';
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
  getIDUser(id:string){
    return this.http.get(`${this.API_URI}/usuario/${id}`, {headers: this.httpheaders})
  }
  getPublicacionporUsuario(id:string){
    return this.http.get(`${this.API_URI}/publicacionesUsuario/${id}`, {headers: this.httpheaders} );
   }
}
