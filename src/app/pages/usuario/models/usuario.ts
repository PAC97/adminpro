export interface user{
    _id?: number,
    Nombres: string ,
    Apellidos: string ,
    Edad: string,
    Telefono: string,
    Direccion: string ,
    Correo: string ,
    Password: string,
    ID_TipoUsuario: string ,
    ID_Servicio: string,
}
export interface userLog{
    Correo: string,
    Password: string,
}