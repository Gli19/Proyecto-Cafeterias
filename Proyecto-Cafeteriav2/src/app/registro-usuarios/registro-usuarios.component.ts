import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrl: './registro-usuarios.component.css'
})
export class RegistroUsuariosComponent implements OnInit  {

usuario:Usuario =new Usuario();
verificacion:boolean =false;

  constructor(private route:ActivatedRoute,private usuarioservice:UsuarioService,private router:Router) {
  }

  ngOnInit(): void {

  }

  private guardarUsuario(){
    this.usuario.tipo ="2";
    this.usuarioservice.registrarUsuario(this.usuario).subscribe(dato =>{
      this.verificacion =true;
      this.registroexitoso();

    });
   
  }

  private registroexitoso(){
   
    
    if(this.verificacion){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registro Exitoso",
        showConfirmButton: false,
        timer: 1200
      });
      this.router.navigate(['login']);
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error en el registro!",
       
      });
    }
  }

  onSubmit(){
    this.guardarUsuario();
  }

}
