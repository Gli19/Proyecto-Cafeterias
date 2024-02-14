import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { Cafeteria } from './cafeteria';

@Injectable({
  providedIn: 'root'
})
export class AgregarCafeteriaIdService {

  //Esta URL obtiene el listado de la cafeteria
  private baseURL = "http://localhost:8080/cafeteria";
    
    
  constructor(private httpClient : HttpClient) { }

  //Este metodo obtiene los productos de las cafeterias
  obtenerListaProductos(id:string):Observable<Cafeteria>{
    return this.httpClient.get<Cafeteria>(`${this.baseURL}/${id}`);
  }

  updateCafeteria(id:string,cafeteria:Cafeteria):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cafeteria);
  }
  

}
