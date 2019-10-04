import { Component, OnInit } from '@angular/core';
import {UsuarioService} from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  uses:any;
  constructor(private service: UsuarioService) { }

  ngOnInit() {
  this.getUsers();
  }
  getUsers(){
    this.service.getUsuario()
    .subscribe(user=>{
      this.uses = user;
      console.log(this.uses);
    })
  }
}
