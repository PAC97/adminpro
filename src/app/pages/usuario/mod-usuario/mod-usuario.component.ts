import { Component, OnInit } from '@angular/core';
//servicio
import {UsuarioService} from '../usuario.service';
//models
import {user} from '../models/Usuario';
//ritas
import {Router, ActivatedRoute} from '@angular/router';
//alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mod-usuario',
  templateUrl: './mod-usuario.component.html',
  styleUrls: ['./mod-usuario.component.css']
})
export class ModUsuarioComponent implements OnInit {
  
  Usr:user={
    'Nombres':'',
    'Apellidos':'',
    'Edad':'',
    'Telefono':'',
    'Direccion': '',
    'Correo':'',
    'Password':'',
    'ID_TipoUsuario':'5d97805ccaf9ff2338b93746',
    'Servicios':'albañil',
    'pathImg': '',
    'Region': ''
  }
  ids:any;
  User:any;
  constructor(private service:UsuarioService, private router:Router, private activateRouter:ActivatedRoute) { }

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
      this.service.getIdUsuario(this.ids)
      .subscribe(tipUs =>{
      this.User = tipUs;
      console.log(this.Usr);
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
        this.service.putUsuario(this.User.Usuario._id, this.Usr) 
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
      this.router.navigate(['/Usuario']);
      }
    });
 }
}
