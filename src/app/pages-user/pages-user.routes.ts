import {RouterModule, Routes } from "@angular/router";
import {PagesUserComponent} from './pages-user.component';
import {InicioComponent} from './inicio/inicio.component';
import {CuentaComponent} from './cuenta/cuenta.component';
import {MisPublicacionesComponent} from './mis-publicaciones/mis-publicaciones.component';
import {ModPublicacionesComponent} from './mis-publicaciones/mod-publicaciones/mod-publicaciones.component';
import {ModCuentaComponent} from './cuenta/mod-cuenta/mod-cuenta.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import {MisServiciosComponent} from './mis-servicios/mis-servicios.component';
import {MasServiciosComponent} from './mis-servicios/mas-servicios/mas-servicios.component';
import {DetallesPubliComponent} from '../pages-user/detalles-publi/detalles-publi.component';
import {PubliCuentaComponent} from '../pages-user/publi-cuenta/publi-cuenta.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesUserComponent,
        children: [
            //Rutas para tipoUsuario xddx
            {path: 'publi-cuenta/:id', component: PubliCuentaComponent},
            {path: 'mas-servicios', component: MasServiciosComponent},
            {path: 'mis-servicios', component: MisServiciosComponent},
            {path: 'mod-cuenta', component: ModCuentaComponent},
            {path: 'mod-publicaciones/:id', component: ModPublicacionesComponent},
            {path: 'mis-publicaciones', component: MisPublicacionesComponent},
            {path: 'cuenta', component: CuentaComponent},
            {path: 'inicio', component: InicioComponent},
            {path: 'mensaje', component: MensajesComponent},
            {path: 'detalles-publi/:id/:id2', component: DetallesPubliComponent},
            {path: '', redirectTo:'/inicio', pathMatch: 'full'}

        ]
    }
];

export const PAGES_ROUTES_USUARIO = RouterModule.forChild(pagesRoutes);