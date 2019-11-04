import { NgModule } from "@angular/core";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { SideuserComponent } from './sideuser/sideuser.component';
import {PAGES_ROUTES_USUARIO} from '../pages-user/pages-user.routes';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {APPS_ROUTES} from '../app.routes';

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
        AngularFontAwesomeModule
    ],
    imports: [
        PAGES_ROUTES_USUARIO,
        APPS_ROUTES
  ]
})

export class SharedModule {};