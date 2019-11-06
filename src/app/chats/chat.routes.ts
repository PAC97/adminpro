import { RouterModule, Routes } from '@angular/router';
import {AppChatsComponent} from './app-chats.component';
import {MessComponent} from './mess/mess.component';
import {SendComponent} from './send/send.component';
const pagesRoutes: Routes = [
    {
        path: '',
        component: AppChatsComponent,
        children: [
            //Rutas para chat xddx
            {path: 'send/:id/:id2', component: SendComponent},
            {path: 'chats', component: MessComponent},
            {path: '', redirectTo:'/chats', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES_CHATS = RouterModule.forChild(pagesRoutes);