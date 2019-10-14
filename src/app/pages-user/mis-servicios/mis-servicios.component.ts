import { Component, OnInit } from '@angular/core';
import {ServiceServicioService} from './service-servicio.service';

@Component({
  selector: 'app-mis-servicios',
  templateUrl: './mis-servicios.component.html',
  styleUrls: ['./mis-servicios.component.css']
})
export class MisServiciosComponent implements OnInit {
  user:any;
  Servicios=[];
  constructor(private service:ServiceServicioService) { }

  ngOnInit() {
    this.getIdUser();
  }
  getIdUser(){
    this.service.getUser()
    .subscribe(user=>{
      this.user = user;
      this.Servicios = this.user.usuario.Servicios;
      console.log(this.Servicios);
    })
  }
}
