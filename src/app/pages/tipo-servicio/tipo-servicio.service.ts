import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

import {tipoServicio} from './models/tiposervicio'; 

@Injectable({
  providedIn: 'root'
})
export class TipoServicioService {
  getServicio() {
    throw new Error("Method not implemented.");
  }
 API_URI = 'https://desempla2.herokuapp.com/api';

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
    //Metodo para traer todos los tipos de servicio existente 
    //Despues del metodo del get ponemos comillas y asignamos los valores ya creados en el constructor para mandar 
    //Nuesta validacion
    getTipoServicio(){
      return this.http.get(`${this.API_URI}/servicio`, {headers: this.httpheaders});
    }
    //Post
    postTipoServicio(Serv:tipoServicio){
      return this.http.post(`${this.API_URI}/servicio`, Serv, {headers: this.httpheaders});
    }
    // Delete
    deleteServicio(id:string){
      return this.http.delete(`${this.API_URI}/servicio/${id}`, {headers: this.httpheaders});
    }
    //Get id
    getIdTipoServicio(id:string){
      return this.http.get(`${this.API_URI}/servicio/${id}`, {headers: this.httpheaders});
    }
    //put
    putTipoServicio(id:any, Serv:tipoServicio){
      return this.http.put(`${this.API_URI}/servicio/${id}`, Serv, {headers: this.httpheaders});
    }
  }
