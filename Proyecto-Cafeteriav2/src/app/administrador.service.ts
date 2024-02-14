import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from './administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  //Esta URL obtiene el listado de la cafeteria
  private baseURL = "http://localhost:8080/administrador";
    
    
  constructor(private httpClient : HttpClient) { }

  //Este metodo obtiene los productos de las cafeterias
  obtenerListaProductos():Observable<Administrador[]>{
    return this.httpClient.get<Administrador[]>(`${this.baseURL}`)
  }
}
