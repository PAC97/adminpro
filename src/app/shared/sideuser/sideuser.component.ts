import { Component, OnInit } from '@angular/core';
import {serviceUser} from '../../services/usuario.service';
@Component({
  selector: 'app-sideuser',
  templateUrl: './sideuser.component.html'

})
export class SideuserComponent implements OnInit {
userSession:any;
  constructor(private service:serviceUser) { }

  ngOnInit() {
    this.service.getIDUser()
    .subscribe(id=>{
      this.userSession = id;
      console.log(this.userSession);
    })
  }

}
