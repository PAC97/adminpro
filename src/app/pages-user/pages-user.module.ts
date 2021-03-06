import { SharedModule } from '../shared/shared.module';
//servicios
import { HttpClientModule } from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import {PagesUserComponent} from './pages-user.component';
import {PAGES_ROUTES_USUARIO} from './pages-user.routes';
import { InicioComponent } from './inicio/inicio.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';
import { ModPublicacionesComponent } from './mis-publicaciones/mod-publicaciones/mod-publicaciones.component';
import { ModCuentaComponent } from './cuenta/mod-cuenta/mod-cuenta.component';

import { ImageCropperModule } from 'ngx-image-cropper';
import { MisServiciosComponent } from './mis-servicios/mis-servicios.component';
import { MasServiciosComponent } from './mis-servicios/mas-servicios/mas-servicios.component';
import { NgxSelectModule } from 'ngx-select-ex';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ChatService } from '../services/chat.service';
import { DetallesPubliComponent } from './detalles-publi/detalles-publi.component';
import { PubliCuentaComponent } from './publi-cuenta/publi-cuenta.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    PagesUserComponent,
    InicioComponent,
    CuentaComponent,
    MisPublicacionesComponent,
    ModPublicacionesComponent,
    ModCuentaComponent,
   
   MisServiciosComponent,
    MasServiciosComponent,
    DetallesPubliComponent,
    PubliCuentaComponent
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
    SharedModule,
    ReactiveFormsModule,
    ImageCropperModule,
    NgxSelectModule,
    Ng2SearchPipeModule  
  ],
  providers: [
    ChatService,
    DatePipe
  ]
})
export class PagesUserModule { }
