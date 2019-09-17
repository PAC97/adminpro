import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
