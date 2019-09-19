import {RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import {MenuComponent} from './menu/menu.component';
import {TipoUsuarioComponent} from './tipo-usuario/tipo-usuario.component';
import {AddTipoUsuarioComponent} from './tipo-usuario/add-tipo-usuario/add-tipo-usuario.component';
import { ModTipoUsuarioComponent } from './tipo-usuario/mod-tipo-usuario/mod-tipo-usuario.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

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
            {path: 'menu', component: MenuComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component:Graficas1Component},
            {path: '', redirectTo:'/login', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);