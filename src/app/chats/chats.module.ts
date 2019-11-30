import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessComponent } from './mess/mess.component';
import {AppChatsComponent} from './app-chats.component';
import {PAGES_ROUTES_CHATS} from './chat.routes';
import {SharedModule} from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SendComponent } from './send/send.component';
import {ChatService} from '../services/chat.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppChatsComponent,
    MessComponent,
    SendComponent,
  ],
  exports: [
],
  imports: [
    PAGES_ROUTES_CHATS,
    SharedModule,
    CommonModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [
    ChatService
  ]
})
export class ChatsModule { }
