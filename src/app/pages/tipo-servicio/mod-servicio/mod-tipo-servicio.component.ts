import { Component, OnInit } from '@angular/core';
//servicio
import {TipoServicioService} from '../tipo-servicio.service';
//models
import {tipoServicio} from '../models/tiposervicio';
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
  
  Servi:tipoServicio={
    'nombre':'',
    'descripcion': ''
  }
  ids:any;
  tipSer:any;
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
      console.log(this.ids);
    //get id registro
      this.service.getIdTipoServicio(this.ids)
      .subscribe(tipSer =>{
      this.tipSer = this.Servi;
      console.log(this.Servi);
    });
  }
  mod(){
   Swal.fire({
      title: '¿Dese modificar el registro?',
      text: "El registro se modificara",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.service.putTipoServicio(this.tipSer.tipoServicio._id, this.Servi) 
        .subscribe(
          res => {
          },
          err => console.log(err)
        )
        Swal.fire(
          'Modificado!',
          'El registro se modifico correctamente.',
          'success'
        )
      this.router.navigate(['/tipoUsuario']);
      }
    });
 }
}
