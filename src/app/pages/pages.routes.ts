import {RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import {MenuComponent} from './menu/menu.component';
import {TipoUsuarioComponent} from './tipo-usuario/tipo-usuario.component';
import {AddTipoUsuarioComponent} from './tipo-usuario/add-tipo-usuario/add-tipo-usuario.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'add-tipoUsuario', component: AddTipoUsuarioComponent},
            {path: 'tipoUsuario', component: TipoUsuarioComponent},
            {path: 'menu', component: MenuComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component:Graficas1Component},
            {path: '', redirectTo:'/menu', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);