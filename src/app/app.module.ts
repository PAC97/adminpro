import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
//Rutas
import { APPS_ROUTES } from './app.routes';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//Modulos

import {PagesUserModule} from './pages-user/pages-user.module';
import { PagesModule } from './pages/pages.module';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import {serviceUser} from './services/usuario.service';
import { PagesUserComponent } from './pages-user/pages-user.component';

import { ImageCropperModule } from 'ngx-image-cropper';


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
    PagesUserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ImageCropperModule
  ],
  providers: [
    serviceUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
