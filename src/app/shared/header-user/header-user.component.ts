import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  
})
export class HeaderUserComponent implements OnInit {
  userSession:any;
  uses:any;
  nombre:any;
  apellido:any;
  img:any;
  correo:any;
  token="";
  constructor(private router:Router, private service: UsuarioService) { }

  ngOnInit() {
    this.token = localStorage.getItem('x-access-token');
    this.getUserpoID();
  }
  getUserpoID(){
    this.service.getIDUser()
    .subscribe(id=>{
      this.uses = id;
      this.userSession = this.uses.usuario;
      this.nombre = this.userSession.Nombres;
      this.apellido = this.userSession.Apellidos;
      this.img = this.userSession.pathImg;
      this.correo = this.userSession.Correo;
      
    })
  }
  cerrar(){
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('session');
    this.router.navigate(['/login']);
  }
}
