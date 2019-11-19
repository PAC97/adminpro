import { Component, OnInit } from '@angular/core';
//servicio
import {TipoServicioService} from '../tipo-servicio.service';
//models
import { tipoServicio } from '../models/tiposervicio';
//ritas
import {Router, ActivatedRoute} from '@angular/router';
//alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mod-tipo-servicio',
  templateUrl: './mod-tipo-servicio.component.html',
  styleUrls: ['./mod-tipo-servicio.component.css']
})
export class ModTipoServicioComponent implements OnInit {
  filter:any;
  p:any;
  Servi:tipoServicio={
    'nombre':'',
    'descripcion': '',
    'pathImage': ''
  }
  ids:any;
  tipSer:any;
  nombre:string;
  descripcion:any;
  id:any;
  User:any;
  permisos:any;
  user:any;
  ok:any;
  constructor(private service:TipoServicioService, private router:Router, private activateRouter:ActivatedRoute) { }

  ngOnInit() {
    //sesion
    var session = localStorage.getItem('x-access-token');
    if(session == null){
      this.router.navigate(['../login'])
    }  
    //cachar id del registro
    var id = this.activateRouter.snapshot.paramMap.get('id');
    this.ids = id;
      
    //get id registro
      this.service.getIdTipoServicio(this.ids)
      .subscribe(tipServ =>{
      this.tipSer = tipServ;
      this.nombre = this.tipSer.tipoServicio.nombre;
      this.descripcion = this.tipSer.tipoServicio.descripcion;
    });
    this.service.getIdUsuario(this.id)
    .subscribe(user=>{
      this.user = user;
      this.permisos = this.user.usuario.Acciones;
    })
  }
  mod(){
    if(this.Servi.nombre != ''){
      if(this.Servi.descripcion != ''){
        this.Mensaje();
      }else{
        this.Servi.descripcion = this.descripcion;
        this.Mensaje();
      }
    } 
    else{
      this.Servi.nombre = this.nombre;
      if(this.Servi.descripcion != ''){
        this.Mensaje();
      }
      else{
        this.Servi.descripcion = this.descripcion;
        this.Mensaje();
      }
    }
  }
  Mensaje(){
    this.permisos.forEach(element => {
      var items = this.permisos.filter( function (items){
        return items.accion == 'Modificar Servicios'
      })
      if(items.length > 0){
        this.ok = true;
      }
      else{
        this.ok = false;
      }
    });
    if(this.ok == true){
      Swal.fire({
        title: '¿Desea modificar el registro?',
        text: "El registro se modificará",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.service.putTipoServicio(this.tipSer.servicio._id, this.Servi) 
          .subscribe(
            res => {
            },
            err => console.log(err)
          )
          Swal.fire(
            'Modificado!',
            'El registro se modificó correctamente.',
            'success'
          )
        this.router.navigate(['/servicio']);
        }
      });
    }
    else{
      Swal.fire(
        'Error',
        'No tienes permiso para realizar esta acción.',
        'warning'
      )
    }
  }
}
