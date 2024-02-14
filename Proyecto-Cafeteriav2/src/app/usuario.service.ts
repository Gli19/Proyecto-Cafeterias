import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResenaProducto } from './resena-producto';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Esta URL obtiene el listado de la cafeteria
  private baseURL = "http://localhost:8080/usuario";
    
    
  constructor(private httpClient : HttpClient) { }

 
  registrarUsuario(usuario:Usuario):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,usuario);
  }

  obtenerUsuarioById(id:string):Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`);
  }


}
