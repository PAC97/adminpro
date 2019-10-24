import { DatePipe } from '@angular/common';

export interface publicaciones{
    Titulo:string,
    Descripcion:string,
    Usuario:string,
    ID_Servicio?:string,
    Fecha:Date,
}