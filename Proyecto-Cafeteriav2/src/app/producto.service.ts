import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //Esta URL obtiene el listado de la cafeteria
  private baseURLcafe = "http://localhost:8080/producto/cafeteria";
  private baseURL = "http://localhost:8080/producto";
  private baseURLPDF =   "http://localhost:8080/producto/exportarPDF";  

    
  constructor(private httpClient : HttpClient) { }

  //Este metodo obtiene los productos de las cafeterias
  obtenerListaProductos(id:string):Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURLcafe}/${id}`);
  }

  updateProducto(id:number,producto:Producto):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,producto);
  }

  
  deleteProducto(id:number):Observable<Producto>{
    return this.httpClient.delete<Producto>(`${this.baseURL}/${id}`);
  }

  generarPDF():Observable<Object>{
    console.log("pdf");
   return  this.httpClient.get<Object>(`${this.baseURLPDF}`);
  }



}
