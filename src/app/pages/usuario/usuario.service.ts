import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

import {user} from './models/usuario'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URI = 'http://localhost:3000/api';
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
    //Metodo para traer todos los usuario existente 
    //Despues del metodo del get ponemos comillas y asignamos los valores ya creados en el constructor para mandar 
    //Nuesta validacion
    getUsuario(){
      return this.http.get(`${this.API_URI}/Usuario`, {headers: this.httpheaders});
    }
    //Post
    postUsuario(Usr:user){
      return this.http.post(`${this.API_URI}/Usuario`, Usr, {headers: this.httpheaders});
    }
    // Delete
    deleteUsuario(id:string){
      return this.http.delete(`${this.API_URI}/Usuario/${id}`, {headers: this.httpheaders});
    }
    //Get id
    getIdUsuario(id:string){
      return this.http.get(`${this.API_URI}/Usuario/${id}`, {headers: this.httpheaders});
    }
    //put
    putUsuario(id:any, Usr:user){
      return this.http.put(`${this.API_URI}/Usuario/${id}`, Usr, {headers: this.httpheaders});
    }
  }

