import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { publicaciones } from './models/publicaciones';

@Injectable({
    providedIn: 'root'
})
export class PublicacionesService{
    API_URI ='https://desempla2.herokuapp.com/api';
    httpheaders: any;
    constructor (private http: HttpClient){
        var session = localStorage.getItem('x-access-token');
        this.httpheaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-access-token': session
        });
    }
    getPublicaciones(){
        return this.http.get(`${this.API_URI}/publicaciones`, {headers: this.httpheaders});
    }
    deletepublicaciones(id:string){
        return this.http.delete(`${this.API_URI}/publicaciones/${id}`, {headers: this.httpheaders});
    }
}
