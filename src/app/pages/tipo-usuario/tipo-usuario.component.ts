import { Component, OnInit } from '@angular/core';
import {TipoUsuarioService} from './tipo-usuario.service';


@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent implements OnInit {
  tipoUsario:any;
  constructor(private service:TipoUsuarioService) { }

  ngOnInit() {
    this.service.getTipoUsuario()
    .subscribe(tip=>{
      this.tipoUsario=tip;
      console.log(this.tipoUsario);
    })
  }

}
