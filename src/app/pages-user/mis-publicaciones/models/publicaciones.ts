export interface publicaciones {
    Descripcion: string,
    Fecha: Date,
    Titulo: string,
    Usuario: string,
    ID_Servicios?:string,
}
export interface comentarios{
    ID_Usuario:string,
    ID_Publicacion:string,
    Comentario:string
}