import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cafeteria } from './cafeteria';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {

  //Esta URL obtiene el listado de la cafeteria
  private baseURL = "http://localhost:8080/cafeteria";


  constructor(private httpClient : HttpClient) { }

  //Este metodo obtiene las cafeterias
  obtenerListaCafeterias():Observable<Cafeteria[]>{
    return this.httpClient.get<Cafeteria[]>(`${this.baseURL}`);
  }

  obtenerCafeteriaById(id:string):Observable<Cafeteria>{
    return this.httpClient.get<Cafeteria>(`${this.baseURL}/${id}`);
  }

  deleteCafeteria(id:number):Observable<Cafeteria>{
    console.log("deltecafeteria");
    return this.httpClient.delete<Cafeteria>(`${this.baseURL}/${id}`);
  }
}
