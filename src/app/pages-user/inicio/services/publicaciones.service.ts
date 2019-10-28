import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import {publicaciones} from '../models/publicaciones';
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  API_URI = 'https://desemplea2.herokuapp.com/api';
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
 //Traer usuario log 
  getIDUser(){
    return this.http.get(`${this.API_URI}/usuario/${this.id}`, {headers: this.httpheaders})
 }
 //obtener servicios 
 getServicios(){
   return this.http.get(`${this.API_URI}/servicio`, {headers: this.httpheaders})
 }
 getIDServicio(id:string){
 return this.http.get(`${this.API_URI}/publicacioneServicio/${id}`,{headers: this.httpheaders})
 }
}
