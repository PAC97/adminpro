import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  idUser:any;
  userCha:any;
  user:any;
  BurChat = [];
  constructor(private service:UsuarioService) { }
  ngOnInit() {
    this.idUser = localStorage.getItem('session');
    this.getUserchat();
  }
  getUserchat(){
    this.service.getChatid(this.idUser)
    .subscribe( chat =>{
      this.user = chat;
      this.userCha = this.user.Chat;
      console.log(this.userCha);
    })
  }
  Chats(){
    this.userCha.forEach(element => {
     var items = this.BurChat.filter( function (items){

      })
    });
  }
}
