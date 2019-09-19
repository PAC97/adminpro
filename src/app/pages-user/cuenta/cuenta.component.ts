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

  constructor( private service: ServiceUserService) { }
  user: any;
  us: any;

  ngOnInit() {
    this.service.getIDUser()
      .subscribe(user => {
        this.user = user;
        this.us = this.user.usuario;
        console.log(this.us)
      })
  }
  
}
