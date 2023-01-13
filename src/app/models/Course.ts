export interface Course {
    _id:string 
    nombre:string
    imagenLink?: string
    descripcion:string
    modalidad:string
    categoria:string
    inicio_clases:string
    duracion:string
    horario:string
    inversion:number
    contenido?:string
    tags?:any[]
    docente:String
    descuentos?:any[]
    requisitos?:string
    createdAt?:string
    updatedAt?:string


}