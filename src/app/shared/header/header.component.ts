import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  cerrar(){
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('session');
    this.router.navigate(['/login']);
  }
}
