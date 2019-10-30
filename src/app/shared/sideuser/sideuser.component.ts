import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../../services/usuario.service';
@Component({
  selector: 'app-sideuser',
  templateUrl: './sideuser.component.html'

})
export class SideuserComponent implements OnInit {
userSession:any;
uses:any;
nombre:any;
apellido:any;
img:any;
  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.service.getIDUser()
    .subscribe(id=>{
      this.uses = id;
      this.userSession = this.uses.usuario;
      this.nombre = this.userSession.Nombres;
      this.apellido = this.userSession.Apellidos;
      this.img = this.userSession.pathImg;
      
    })
  }

}
