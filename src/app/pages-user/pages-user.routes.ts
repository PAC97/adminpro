import {RouterModule, Routes } from "@angular/router";
import {PagesUserComponent} from './pages-user.component';
import {InicioComponent} from './inicio/inicio.component';
import {CuentaComponent} from './cuenta/cuenta.component';
import {MisPublicacionesComponent} from './mis-publicaciones/mis-publicaciones.component';
import {ModPublicacionesComponent} from './mis-publicaciones/mod-publicaciones/mod-publicaciones.component';
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesUserComponent,
        children: [
            //Rutas para tipoUsuario xddx
            {path: 'mod-publicaciones/:id', component: ModPublicacionesComponent},
            {path: 'mis-publicaciones', component: MisPublicacionesComponent},
            {path: 'cuenta', component: CuentaComponent},
            {path: 'inicio', component: InicioComponent},
            {path: '', redirectTo:'/inicio', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES_USUARIO = RouterModule.forChild(pagesRoutes);