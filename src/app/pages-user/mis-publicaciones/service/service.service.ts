import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { publicaciones, comentarios } from '../../inicio/models/publicaciones';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API_URI = 'https://desempla2.herokuapp.com/api';

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
  //getidpor usuario
  getPublicacionporUsuario() {
    return this.http.get(`${this.API_URI}/publicacionesUsuario/${this.usuario}`, { headers: this.httpheaders });
  }
  DeltePublicaciones(id: string) {
    return this.http.delete(`${this.API_URI}/publicaciones/${id}`, { headers: this.httpheaders });
  }
  getIdpublicacion(id: string) {
    return this.http.get(`${this.API_URI}/publicaciones/${id}`, { headers: this.httpheaders });
  }
  putPublicacion(pub: publicaciones, id: string) {
    return this.http.put(`${this.API_URI}/publicaciones/${id}`, pub, { headers: this.httpheaders });
  }
  postComentarios(Comentarios: comentarios) {
    return this.http.post(`${this.API_URI}/comentarios`, Comentarios, { headers: this.httpheaders });
  }
  getComentarios(id: string) {
    return this.http.get(`${this.API_URI}/comentarios/${id}`, { headers: this.httpheaders });
  }
  getIDComentarios(id: string) {
    return this.http.get(`${this.API_URI}/comentario/${id}`, { headers: this.httpheaders });
  }
  deleteComentarios(id: string) {
    return this.http.delete(`${this.API_URI}/comentarios/${id}`, { headers: this.httpheaders });
  }
  puComentario(id: string, Comentarios: comentarios) {
    return this.http.put(`${this.API_URI}/comentarios/${id}`, Comentarios, { headers: this.httpheaders });
  }
  getIDUser(){
    return this.http.get(`${this.API_URI}/usuario/${this.usuario}`, {headers: this.httpheaders})
 }
}
