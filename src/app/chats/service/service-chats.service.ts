import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceChatsService {
  API_URI = 'https://desempla2.herokuapp.com/api';
  httpheaders:any;
  constructor(private http:HttpClient) {
    var session = localStorage.getItem('x-access-token');
    this.httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': session
  });
   }
   getIDchats(id:string){
    return this.http.get(`${this.API_URI}/chat/${id}`, {headers: this.httpheaders});
   }
   getChatsUsers(id1:any, id2:any){
    return this.http.get(`${this.API_URI}/chats/${id1}/${id2}`, {headers: this.httpheaders});
   }
}
