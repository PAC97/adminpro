import { Component, OnInit } from '@angular/core';
import {user} from '../pages/usuario/models/usuario';
import {serviceUser} from '../services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  User:user={
    'Nombres':'',
    'Apellidos':'',
    'Edad':'',
    'Telefono':'',
    'Direccion': '',
    'Correo':'',
    'Password':'',
    'ID_TipoUsuario':'5d6ec10bee352216b8b3d421',
    'ID_Servicio':''
    }
    IDservicio;
    confirm;
    uses:any;
    servicios:any;
  constructor(private service:serviceUser, private route:Router) { }

  ngOnInit() {
    this.service.getUser()
    .subscribe(user=>{
      this.uses = user;
      console.log(this.uses);
    })
    //Combobox 
    this.service.getService()
    .subscribe(tip=>{
      this.servicios = tip;
      console.log(this.servicios);
    })
  }
  addServicios(event){
    this.IDservicio = event.target.value;
    this.User.ID_Servicio = this.IDservicio;
  }
  add(){
    var correo = this.User.Correo;
    var items = this.uses.filter(function(item) {
      return item.Correo == correo;
    });
    console.log(items);
    if(this.User.Nombres != '' && this.User.Apellidos && this.User.Edad != '' && this.User.Telefono != '' 
    && this.User.Direccion != '' && this.User.Correo != '' && this.User.Password != ''){
      if(this.confirm == this.User.Password){
        if(items.length <=0 ){
          this.service.postUser(this.User)
          .subscribe(user=>{
            if(user != null){
             Swal.fire(
               'Registrado con exito',
               'Para ingresar su correo es y contraseña son: '+ this.User.Correo + ' ' + this.User.Password,
               'success'
             )
             console.log(user);
             this.route.navigate(['/login']);
            }
          })
         }
         else{
          Swal.fire(
            'Error en el correo',
            'Correo ingresado no es valido o esta siendo ocupado',
            'warning'
          )
         }
        }
   
      else{
        Swal.fire(
          'La contraseña ingresadas no coinciden!!',
          '',
          'warning'
        )
      }
    }
    else{
      Swal.fire(
        'Verificar los datos ingresados!',
        'Todos los campos deben ser llenado.',
        'warning'
      )
    }
  }
}
