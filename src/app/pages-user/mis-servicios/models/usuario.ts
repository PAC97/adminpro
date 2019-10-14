export interface user{
    _id?: number,
    Nombres: string ,
    Apellidos: string ,
    Edad: string,
    Telefono: string,
    Direccion: string ,
    Correo: string ,
    Password: string,
    ID_TipoUsuario: string,
    pathImg: string,
    Region?: string,
    Servicios?: string[],
}
export interface userLog{
    Correo: string,
    Password: string,
}
export interface ser{
    nombre:string,
}