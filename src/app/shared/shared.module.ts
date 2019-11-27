import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { SideuserComponent } from './sideuser/sideuser.component';
import {PAGES_ROUTES_USUARIO} from '../pages-user/pages-user.routes';
import {PAGES_ROUTES_CHATS} from '../chats/chat.routes';
import { HeaderChatComponent } from './header-chat/header-chat.component';
@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
        HeaderUserComponent,
        SideuserComponent,
        HeaderChatComponent,
    ],
    exports:[
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        SideuserComponent,
        HeaderUserComponent,
        NopagefoundComponent,
        HeaderChatComponent,
    ],
    imports: [
        PAGES_ROUTES_USUARIO,
        PAGES_ROUTES_CHATS,
        FormsModule,
        CommonModule
  ]
})

export class SharedModule {};