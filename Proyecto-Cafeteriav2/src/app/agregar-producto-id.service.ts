import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class AgregarProductoIdService {

    //Esta URL obtiene el listado de la cafeteria
    private baseURL = "http://localhost:8080/producto";

    
    
    
    constructor(private httpClient : HttpClient) { }
  
    //Este metodo obtiene los productos de las cafeterias
    obtenerListaProductos(id:string):Observable<Producto>{
      return this.httpClient.get<Producto>(`${this.baseURL}/${id}`);
    }

  
}
