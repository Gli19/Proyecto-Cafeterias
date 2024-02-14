import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResenaProducto } from './resena-producto';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  private baseURL = "http://localhost:8080/usuario/login";
      
    
  constructor(private httpClient : HttpClient) { }

  //Este metodo obtiene los productos de las cafeterias
  obtenerTipo(correoElectronico:string,contrasena:string):Observable<Usuario>{
  
    console.log("Servicio");
    console.log(correoElectronico);
    console.log(contrasena);
    

    return this.httpClient.get<Usuario>(`${this.baseURL}/${correoElectronico}/${contrasena}`);
  }

}
