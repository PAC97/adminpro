import { SharedModule } from '../shared/shared.module';
//servicios
import { HttpClientModule } from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import {PagesUserComponent} from './pages-user.component';
import {PAGES_ROUTES_USUARIO} from './pages-user.routes';
import { InicioComponent } from './inicio/inicio.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';
import { ModPublicacionesComponent } from './mis-publicaciones/mod-publicaciones/mod-publicaciones.component';

@NgModule({
  declarations: [
    PagesUserComponent,
    InicioComponent,
    CuentaComponent,
    MisPublicacionesComponent,
    ModPublicacionesComponent,
  ],
  exports: [
    PagesUserComponent,
],
  imports: [
    CommonModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    FormsModule,
    PAGES_ROUTES_USUARIO,
    SharedModule
  ]
})
export class PagesUserModule { }
