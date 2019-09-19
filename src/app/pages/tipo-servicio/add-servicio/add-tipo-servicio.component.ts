import { Component, OnInit } from '@angular/core';
//servicios
import {TipoServicioService} from '../tipo-servicio.service';
//models
import {tipoServicio} from '../models/tiposervicio';
//rutas
import {Router} from '@angular/router';
//alerta
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tipo-servicio',
  templateUrl: './add-tipo-servicio.component.html',
  styleUrls: ['./add-tipo-servicio.component.css']
})
export class AddTipoServicioComponent implements OnInit {

  Servicio:tipoServicio={
    nombre:'',
    descripcion: ''
  }
  constructor(private service:TipoServicioService, private router:Router) { }

  ngOnInit() {
    var session = localStorage.getItem('x-access-token');
    if(session == null){
      this.router.navigate(['../login'])
    }  
  }
  Agregar(){
   if(this.Servicio.nombre != '' && this.Servicio.descripcion != ''){
      this.service.postTipoServicio(this.Servicio)
      .subscribe(Serv=>{
        console.log(Serv)
          Swal.fire(
            'Servicio Agregado!',
            'El registro se agrego correctamente.',
            'success'
          )
          this.router.navigate(['/servicio']);
      })
   }
    else{
      Swal.fire(
        'Verificar los datos ingresados!',
        'El registro debe ir lleno correctamente.',
        'warning'
      )
    }
  }
}
