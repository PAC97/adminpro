import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private service: UsuarioService) { }
  userSession: any;
  uses: any;
  nombre:any;
  apellido:any;
  img:any;
  correo:any;
  ngOnInit() {
    this.service.getIDUser()
    .subscribe(id => {
      this.uses = id;
      this.userSession = this.uses.usuario;
      this.nombre = this.userSession.Nombres;
      this.apellido = this.userSession.Apellidos;
      this.img = this.userSession.pathImg;
      this.correo = this.userSession.Correo;
      console.log(this.userSession);
    })
  }
  cerrar(){
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('session');
    this.router.navigate(['/login']);
  }
}
