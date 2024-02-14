import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgregarProductoService {

  private baseURL = "http://localhost:8080/producto";
    
    
  constructor(private httpClient : HttpClient) { }
  
  //Este metodo obtiene los productos de las cafeterias
  registrarProducto(producto:Producto):Observable<Object>{
    console.log(producto);
    return this.httpClient.post(`${this.baseURL}`,producto);
  }
}
