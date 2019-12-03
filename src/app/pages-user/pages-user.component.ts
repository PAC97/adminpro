import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-user',
  templateUrl: './pages-user.component.html',
  styleUrls: ['./pages-user.component.css']
})
export class PagesUserComponent implements OnInit {
token="";
  constructor() { }

  ngOnInit() {
    this.token = localStorage.getItem('x-access-token')
  }

}
