import {RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { TipServicioComponent } from './login//tip-servicio/tip-servicio.component';
import {MessageComponent} from './login/message/message.component';

const appRoutes: Routes = [

    
{path: 'message', component: MessageComponent},
{path: 'SeleccionarServicios', component: TipServicioComponent},
{path: 'login', component: LoginComponent},
{path:'register', component: RegisterComponent},
{path: '**', component: NopagefoundComponent}
];

export const APPS_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});