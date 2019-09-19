import { Component, OnInit } from '@angular/core';
// import {serviceUser} from '../../services/usuario.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  // userSession:any;
  // uses:any;
  constructor() { }

  ngOnInit() {
    // this.service.getIDUser()
    // .subscribe(id=>{
    //   this.uses = id;
    //   this.userSession = this.uses.usuario;
    //   console.log(this.userSession);
    //})
  }
}
