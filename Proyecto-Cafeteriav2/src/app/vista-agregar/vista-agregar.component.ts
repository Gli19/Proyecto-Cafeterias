import { Component, OnInit } from '@angular/core';
import { ResenaProducto } from '../resena-producto';
import { ResenaProductoService } from '../resena-producto.service';
import { ProductoService } from '../producto.service';
import { AgregarProductoIdService } from '../agregar-producto-id.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-vista-agregar',
  templateUrl: './vista-agregar.component.html',
  styleUrl: './vista-agregar.component.css'
})
export class VistaAgregarComponent implements OnInit {

  id:string;
  tipo:string;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private productoservice:ProductoService
    
  ){ }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.tipo = this.route.snapshot.params['tipo'];

  }


  cafeterias(){
    this.router.navigate(['agregar-cafeteria',this.id,this.tipo]);
  }

  productos(){
    this.router.navigate(['agregar-productos',this.id,this.tipo]);
  }

  descargarProducto(){

  //this.router.navigate(["http://localhost:8080/producto/exportarPDF"]);
    //this.productoservice.generarPDF();
/*
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Generacion Reporte Producto",
      showConfirmButton: false,
      timer: 700
    });
  }
*/
  }
  descargarCafeteria(){

    this.productoservice.generarPDF();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Generacion Reporte Cafeteria",
      showConfirmButton: false,
      timer: 700
    });
  }

}
