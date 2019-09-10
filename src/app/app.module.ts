import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
//Rutas
import { APPS_ROUTES } from './app.routes';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//Modulos


import { PagesModule } from './pages/pages.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import {serviceUser} from './services/usuario.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APPS_ROUTES,
    PagesModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    serviceUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
