import { Component, OnInit } from '@angular/core';
import { ServiceServicioService } from './service-servicio.service';
import { user } from './models/usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-servicios',
  templateUrl: './mis-servicios.component.html',
  styleUrls: ['./mis-servicios.component.css']
})
export class MisServiciosComponent implements OnInit {
  user: any;
  Servicios = [];
  User: user = {
    'Nombres': '',
    'Apellidos': '',
    'Edad': '',
    'Telefono': '',
    'Direccion': '',
    'Correo': '',
    'Password': '',
    'ID_TipoUsuario': '',
    'pathImg': '',
    'Estado':true,
    'Servicios': ['']
  }
  constructor(private service: ServiceServicioService) { }

  ngOnInit() {
    this.getIdUser();
  }
  getIdUser() {
    this.service.getUser()
      .subscribe(user => {
        this.user = user;
        this.Servicios = this.user.usuario.Servicios;
      })
  }
  eliminar(nombre: string) {
    Swal.fire({
      title: '¿Dese eliminar el servicio?',
      text: "El registro se eliminara",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        var items = this.Servicios.filter(function (items) {
          return items.nombre == nombre;
        })

        var index: number = this.Servicios.indexOf(this.Servicios.find(x => x.nombre == nombre));
        this.Servicios.splice(index, 1);

        this.add();
        this.getIdUser();
      }
    });
  }

  add() {
    this.User.Nombres = this.user.usuario.Nombres;
    this.User.Apellidos = this.user.usuario.Apellidos;
    this.User.Edad = this.user.usuario.Edad;
    this.User.Telefono = this.user.usuario.Telefono;
    this.User.Direccion = this.user.usuario.Direccion;
    this.User.Correo = this.user.usuario.Correo;
    this.User.Password = this.user.usuario.Password;
    this.User.ID_TipoUsuario = this.user.usuario.ID_TipoUsuario;
    this.User.pathImg = this.user.usuario.pathImg;
    this.User.Servicios = this.Servicios;
    this.User.Estado = true;
    this.service.putUsuario(this.User, this.user.usuario._id)
      .subscribe(us => {

        Swal.fire(
          'Datos eliminados con exito con exito',
          'Sus servicios se Eliminaron',
          'success'
        )
      })
  }
}
