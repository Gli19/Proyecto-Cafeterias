import { Producto } from "./producto";
import { Usuario } from "./usuario";

export class ResenaProducto {
    id:number;
    calificacion:Float32List;
    comentario:string;
    producto:Producto;
    usuario:Usuario;
}
