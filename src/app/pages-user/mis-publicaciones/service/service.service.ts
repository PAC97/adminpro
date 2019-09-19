import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import {publicaciones} from '../../inicio/models/publicaciones';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API_URI = 'http://localhost:3000/api';
  httpheaders:any;
  usuario:any;
  constructor(private http:HttpClient) {
    var session = localStorage.getItem('x-access-token');
    this.usuario = localStorage.getItem('session');
    this.httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': session
  });
 }
 //getidpor usuario
 getPublicacionporUsuario(){
  return this.http.get(`${this.API_URI}/publicacionesUsuario/${this.usuario}`, {headers: this.httpheaders} );
 }
 DeltePublicaciones(id:string){
   return this.http.delete(`${this.API_URI}/publicaciones/${id}`, {headers: this.httpheaders});
 }
 getIdpublicacion(id:string){
  return this.http.get(`${this.API_URI}/publicaciones/${id}`, {headers: this.httpheaders});
 }
 putPublicacion(pub:publicaciones, id:string){
  return this.http.put(`${this.API_URI}/publicaciones/${id}`, pub , {headers: this.httpheaders});
 }
}
