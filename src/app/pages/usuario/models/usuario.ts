export interface user{
    _id?: string,
    Nombres: string ,
    Apellidos: string ,
    Edad: string,
    Telefono: string,
    Direccion: string ,
    Correo: string ,
    Password: string,
    ID_TipoUsuario: string ,
    Servicios:string[],
    pathImg: string,
    Region: string,
    Estado?: boolean;
}
export interface userLog{
    Correo: string,
    Password: string,
}