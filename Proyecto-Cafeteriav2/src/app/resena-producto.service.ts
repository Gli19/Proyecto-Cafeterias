import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResenaProducto } from './resena-producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResenaProductoService {

  //Esta URL obtiene el listado de la cafeteria
  private baseURL = "http://localhost:8080/resenaproducto/producto";
    
  private baseURLoriginal = "http://localhost:8080/resenaproducto";
  constructor(private httpClient : HttpClient) { }

  //Este metodo obtiene los productos de las cafeterias
  obtenerListaResenaProducto():Observable<ResenaProducto[]>{
    return this.httpClient.get<ResenaProducto[]>(`${this.baseURL}`)
  }

  obtenerListaResenaByProductoId(id:number):Observable<ResenaProducto[]>{
    return this.httpClient.get<ResenaProducto[]>(`${this.baseURL}/${id}`);
  }

  registrarResena(resena:ResenaProducto):Observable<Object>{
    return this.httpClient.post(`${this.baseURLoriginal}`,resena);
  }

  obtenerCalificacionUsuarios(id:number):Observable<Number>{
    return this.httpClient.get<Number> (`${this.baseURLoriginal}/${id}`);
  }

}
