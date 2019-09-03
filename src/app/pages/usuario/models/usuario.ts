export interface user{
    _id?: number,
    Nombres: string ,
    Apellidos: string ,
    Edad: Number,
    Telefono: Number,
    Direccion: string ,
    Correo: string ,
    Password: string,
    ID_TipoUsuario: Number ,
    ID_Servicio: Number,
}
export interface userLog{
    Correo: string,
    Password: string,
}