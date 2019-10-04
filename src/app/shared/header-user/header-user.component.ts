import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',

})
export class HeaderUserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  cerrar(){
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('session');
    this.router.navigate(['/login']);
  }
}
