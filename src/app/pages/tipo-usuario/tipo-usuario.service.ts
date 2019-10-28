import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

import {tipoUsuario} from './models/tipoUsuario'; 

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {
  API_URI = 'https://desemplea2.herokuapp.com/api';
  //variable para llenar dentro del constructor para luego utilizarce 
    httpheaders:any;
  constructor(private http:HttpClient) {
    //Creamos un constructor para poder mandar la cabecera solo con la asignacion dentro del metodo
    //cachamos el token que esta almacenado en el localstorage
    var session = localStorage.getItem('x-access-token');
    //A la variable de header le asiggnamos el tipo de dato y le mandamos el token para poder validar 
    this.httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': session
     });
   }
    //Metodo para traer todos los tipos de usuario existente 
    //Despues del metodo del get ponemos comillas y asignamos los valores ya creados en el constructor para mandar 
    //Nuesta validacion
    getTipoUsuario(){
      return this.http.get(`${this.API_URI}/tipoUsuario`, {headers: this.httpheaders});
    }
    //Post
    postTipoUsuario(TipoUser:tipoUsuario){
      return this.http.post(`${this.API_URI}/tipoUsuario`, TipoUser, {headers: this.httpheaders});
    }
    // Delete
    deleteTipoUsuario(id:string){
      return this.http.delete(`${this.API_URI}/tipoUsuario/${id}`, {headers: this.httpheaders});
    }
    //Get id
    getIdtipoUsuario(id:string){
      return this.http.get(`${this.API_URI}/tipoUsuario/${id}`, {headers: this.httpheaders});
    }
    //put
    putTipoUsuario(id:any, TipoUser:tipoUsuario){
      return this.http.put(`${this.API_URI}/tipoUsuario/${id}`, TipoUser, {headers: this.httpheaders});
    }
  }
