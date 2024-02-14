import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResenaCafe } from './resena-cafe';
import { Observable } from 'rxjs';
import { Cafeteria } from './cafeteria';

@Injectable({
  providedIn: 'root'
})
export class ResenaCafeService {

  //Esta URL obtiene el listado de la cafeteria
  private baseURL = "http://localhost:8080/resenacafeteria";
    
  private baseURLresena = "http://localhost:8080/resenacafeteria/cafeteria";
  constructor(private httpClient : HttpClient) { }

  obtenerListaReseñasCafe():Observable<ResenaCafe[]>{
    return this.httpClient.get<ResenaCafe[]>(`${this.baseURL}`)
  }

  registrarResenaCafeteria(resena:ResenaCafe):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,resena);
  }

  obtenerCalificacionUsuariosByCafeteria(id:number):Observable<Number>{
    return this.httpClient.get<Number> (`${this.baseURL}/${id}`);
  }

  obtenerListaResenaByCafeteriaId(id:string):Observable<ResenaCafe[]>{
    return this.httpClient.get<ResenaCafe[]>(`${this.baseURLresena}/${id}`);
  }

}
