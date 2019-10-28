import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
//servicios
import { HttpClientModule } from "@angular/common/http";
import {TipoUsuarioService} from './tipo-usuario/tipo-usuario.service';
import { UsuarioService } from './usuario/usuario.service';
import { TipoServicioService } from './tipo-servicio/tipo-servicio.service';
import { PublicacionesService } from './publicaciones/publicaciones.service';

//Paginacion
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';
import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent} from './menu/menu.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';
import { CommonModule } from '@angular/common';
import { AddTipoUsuarioComponent } from './tipo-usuario/add-tipo-usuario/add-tipo-usuario.component';
import { ModTipoUsuarioComponent } from './tipo-usuario/mod-tipo-usuario/mod-tipo-usuario.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

//
import {ServicioComponent} from './tipo-servicio/tipo-servicio.component';
import {AddTipoServicioComponent} from './tipo-servicio/add-servicio/add-tipo-servicio.component';
import {ModTipoServicioComponent} from './tipo-servicio/mod-servicio/mod-tipo-servicio.component'
import { from } from 'rxjs';


import { CuentaComponent } from './cuenta/cuenta.component';
import { ModCuentaComponent } from './cuenta/mod-cuenta/mod-cuenta.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ImageCropperModule } from 'ngx-image-cropper';
import { AdminRegisterComponent } from './cuenta/admin-register/admin-register.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        UsuarioComponent,
        MenuComponent,
        TipoUsuarioComponent,
        AddTipoUsuarioComponent,
        ModTipoUsuarioComponent,
        ServicioComponent,
        AddTipoServicioComponent,
        ModTipoServicioComponent,
        PublicacionesComponent,
        CuentaComponent,
        ModCuentaComponent,
        AdminRegisterComponent


    ], exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        MenuComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        NgxPaginationModule,
        AngularFontAwesomeModule,
        Ng2SearchPipeModule,
        ImageCropperModule,
        ImageCropperModule,
   ],
   providers: [
    TipoUsuarioService,

    UsuarioService,
    TipoServicioService,
    PublicacionesService

   ]
})

export class PagesModule { };