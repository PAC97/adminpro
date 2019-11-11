import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../../services/usuario.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  userSession: any;
  uses: any;
  nombre:any;
  apellido:any;
  img:any;
  permisos:any;
  per:any;
  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.service.getIDUser()
      .subscribe(id => {
        this.uses = id;
        this.userSession = this.uses.usuario;
        this.nombre = this.userSession.Nombres;
        this.apellido = this.userSession.Apellidos;
        this.img = this.userSession.pathImg;
        this.permisos = this.userSession.Acciones;
        if(this.permisos.length >= 4){
          this.per = true;
        }
        else{
          this.per = false;
        }
      })
  }
}
