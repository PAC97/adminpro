import { Component, OnInit } from '@angular/core';
//servicios
import {TipoUsuarioService} from '../tipo-usuario.service';
//models
import {tipoUsuario} from '../models/tipoUsuario';
//rutas
import {Router} from '@angular/router';
//alerta
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tipo-usuario',
  templateUrl: './add-tipo-usuario.component.html',
  styleUrls: ['./add-tipo-usuario.component.css']
})
export class AddTipoUsuarioComponent implements OnInit {

  tipU:tipoUsuario={
    'nombre':'',
    'descripcion': ''
  }
  constructor(private service:TipoUsuarioService, private router:Router) { }

  ngOnInit() {
    var session = localStorage.getItem('x-access-token');
    if(session == null){
      this.router.navigate(['../login'])
    }  
  }
  Agregar(){
   if(this.tipU.nombre != '' && this.tipU.descripcion != ''){
      this.service.postTipoUsuario(this.tipU)
      .subscribe(tipoU=>{
        
          Swal.fire(
            'Usuario Agregado!',
            'El registro se agregó correctamente.',
            'success'
          )
          this.router.navigate(['/tipoUsuario']);
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
