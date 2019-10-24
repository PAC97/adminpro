import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from './service/service-user.service';

import { Router, ActivatedRoute } from '@angular/router';
//alerta
import Swal from 'sweetalert2';
//Models
import { user } from './models/usuario';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  constructor(private service: ServiceUserService) { }
  user: any;
  us: any;
  nombre: any;
  apellido:any;
  telefono:any;
  direccion:any;
  correo:any;
  img:any;
  ngOnInit() {
    this.service.getIDUser()
      .subscribe(user => {
        this.user = user;
        this.us = this.user.usuario;
        this.nombre = this.user.usuario.Nombres;
        this.apellido = this.user.usuario.Apellidos;
        this.telefono = this.user.usuario.Telefono;
        this.direccion = this.user.usuario.Direccion;
        this.correo = this.user.usuario.Correo;
        this.img = this.user.usuario.pathImg;
        console.log(this.us)
      })
  }

}
