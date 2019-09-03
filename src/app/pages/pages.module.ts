import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
//servicios
import { HttpClientModule } from "@angular/common/http";
import {TipoUsuarioService} from './tipo-usuario/tipo-usuario.service';
//Paginacion
import {NgxPaginationModule} from 'ngx-pagination';

import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';
import { UsuarioComponent } from './usuario/usuario.component';
import {MenuComponent} from './menu/menu.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';
import { CommonModule } from '@angular/common';
import { AddTipoUsuarioComponent } from './tipo-usuario/add-tipo-usuario/add-tipo-usuario.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        UsuarioComponent,
        MenuComponent,
        TipoUsuarioComponent,
        AddTipoUsuarioComponent
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
        NgxPaginationModule
   ],
   providers: [
    TipoUsuarioService
   ]
})

export class PagesModule { };