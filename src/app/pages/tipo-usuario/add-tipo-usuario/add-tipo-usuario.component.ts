import { Component, OnInit } from '@angular/core';
import {TipoUsuarioService} from '../tipo-usuario.service';
import {tipoUsuario} from '../models/tipoUsuario';
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
  constructor() { }

  ngOnInit() {
  }

}
