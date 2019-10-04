import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import {publicaciones} from '../models/publicaciones';
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  API_URI = 'http://localhost:3000/api';
  httpheaders:any;
  
  constructor(private http:HttpClient) {
    var session = localStorage.getItem('x-access-token');
    this.httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': session
  });
 }
 //crear publicaciones 
 postPublicaciones(publi:publicaciones){
   return this.http.post(`${this.API_URI}/publicaciones`, publi , {headers: this.httpheaders} );
 }
 //
 //traer publicaciones 
 getPublicaciones(){
  return this.http.get(`${this.API_URI}/publicaciones`, {headers: this.httpheaders} );
 }
 //
}
