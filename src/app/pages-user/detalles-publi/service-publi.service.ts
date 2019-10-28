import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicePubliService {
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
  getIDUser(id:string){
    return this.http.get(`${this.API_URI}/usuario/${id}`, {headers: this.httpheaders})
 }
 getPublicacionId(id:string){
  return this.http.get(`${this.API_URI}/publicaciones/${id}`, {headers: this.httpheaders})
 }
}
