import { RouterModule, Routes } from '@angular/router';
import {AppChatsComponent} from './app-chats.component';
import {MessComponent} from './mess/mess.component';
const pagesRoutes: Routes = [
    {
        path: '',
        component: AppChatsComponent,
        children: [
            //Rutas para tipoUsuario xddx
           
            {path: 'chats', component: MessComponent},
            {path: '', redirectTo:'/chats', pathMatch: 'full'}

        ]
    }
];

export const PAGES_ROUTES_CHATS = RouterModule.forChild(pagesRoutes);