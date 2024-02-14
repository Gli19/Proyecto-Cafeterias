import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';


import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit   {

  correo:string;
  contrasena:string;
  usuario:Usuario = new Usuario();
  tipo:string ="";
  usuarioid:string;
  constructor(private loginservice:LoginService, private router:Router){

  }

  ngOnInit(): void {
      
  }

  

  onSubmit(){
    console.log(this.usuario);
    this.iniciarsesion()
  
  }

  encontrarUsuario(){
    return new Promise((res) => {
      this.loginservice.obtenerTipo(this.usuario.correoElectronico,this.usuario.contrasena).subscribe(data => {
        if(data!=null){
        this.usuario.tipo =data.tipo;
        this.usuario.id = data.id;
        }
        res('Usuario buscado');

        });
       
    })

}

  iniciarsesion = async ()=>{
    await this.encontrarUsuario();

    console.log(this.usuario.tipo);

    if(this.usuario.tipo !=null ){
      if(this.usuario.tipo=="1"){
        this.router.navigate(['vista-agregar',this.usuario.id,this.usuario.tipo]); 
      }
   else{ this.router.navigate(['cafeterias',this.usuario.tipo,this.usuario.id]);
  }
   }
   else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Datos incorrectos!",
    
    });
   }
  
}

registrar(){
  this.router.navigate(['registro-usuario']);
}
}
