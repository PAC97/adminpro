import { NgModule } from "@angular/core";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { SideuserComponent } from './sideuser/sideuser.component';
import {PAGES_ROUTES_USUARIO} from '../pages-user/pages-user.routes';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
        HeaderUserComponent,
        SideuserComponent,
    ],
    exports:[
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        SideuserComponent,
        HeaderUserComponent,
        NopagefoundComponent,
    ],
    imports: [
        PAGES_ROUTES_USUARIO,
  ]
})

export class SharedModule {};