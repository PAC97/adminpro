import {RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import {MenuComponent} from './menu/menu.component';
import {TipoUsuarioComponent} from './tipo-usuario/tipo-usuario.component';
import {AddTipoUsuarioComponent} from './tipo-usuario/add-tipo-usuario/add-tipo-usuario.component';
import { ModTipoUsuarioComponent } from './tipo-usuario/mod-tipo-usuario/mod-tipo-usuario.component';

//Usuario
import {UsuarioComponent} from './usuario/usuario.component';
//servicio
import {ServicioComponent} from './tipo-servicio/tipo-servicio.component';
import {AddTipoServicioComponent} from './tipo-servicio/add-servicio/add-tipo-servicio.component';
import {ModTipoServicioComponent} from './tipo-servicio/mod-servicio/mod-tipo-servicio.component';
//cuenta
import {CuentaComponent} from './cuenta/cuenta.component';
import {ModCuentaComponent} from './cuenta/mod-cuenta/mod-cuenta.component';

import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { from } from 'rxjs';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            //Rutas para publicaciones
            {path: 'publicaciones', component: PublicacionesComponent},
            //Rutas para tipoUsuario xddx
            {path: 'mod-tipoUsuario/:id', component: ModTipoUsuarioComponent},
            {path: 'add-tipoUsuario', component: AddTipoUsuarioComponent},
            {path: 'tipoUsuario', component: TipoUsuarioComponent},
            //Fin rutas tipoUsuario
             //Rutas para Usuario 
              {path: 'usuario', component: UsuarioComponent},
             //Fin rutas Usuario
              //Rutas para Servicio
            {path: 'mod-servicio/:id', component: ModTipoServicioComponent},
            {path: 'add-servicio', component: AddTipoServicioComponent},
            {path: 'servicio', component: ServicioComponent},
            //Fin rutas Servicio
            {path: 'menu', component: MenuComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component:Graficas1Component},
            {path: '', redirectTo:'/menu', pathMatch: 'full'},
            //Rutas para Cuenta
            {path: 'cuenta-admin', component: CuentaComponent },
            {path: 'mod-cadmin', component: ModCuentaComponent }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);