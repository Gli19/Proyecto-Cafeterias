import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from './administrador';
import { Cafeteria } from './cafeteria';

@Injectable({
  providedIn: 'root'
})
export class AgregarCafeteriaService {
//Esta URL obtiene el listado de la cafeteria
private baseURL = "http://localhost:8080/cafeteria";
    
    
constructor(private httpClient : HttpClient) { }

//Este metodo obtiene los productos de las cafeterias
registrarCafeteria(cafeteria:Cafeteria):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,cafeteria);
}


}
