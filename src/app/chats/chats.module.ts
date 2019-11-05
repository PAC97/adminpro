import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessComponent } from './mess/mess.component';
import {AppChatsComponent} from './app-chats.component';
import {PAGES_ROUTES_CHATS} from './chat.routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AppChatsComponent,
    MessComponent,
  ],
  exports: [
],
  imports: [
    PAGES_ROUTES_CHATS,
    SharedModule
  ],
  providers: [
    
  ]
})
export class ChatsModule { }
