import { Component, OnInit } from '@angular/core';
import { ResenaProducto } from '../resena-producto';
import { ResenaProductoService } from '../resena-producto.service';
import { ProductoService } from '../producto.service';
import { AgregarProductoIdService } from '../agregar-producto-id.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ResenaCafe } from '../resena-cafe';
import { Cafeteria } from '../cafeteria';
import { CafeteriaService } from '../cafeteria.service';
import { ResenaCafeService } from '../resena-cafe.service';


import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-resena-cafeteria',
  templateUrl: './resena-cafeteria.component.html',
  styleUrl: './resena-cafeteria.component.css'
})
export class ResenaCafeteriaComponent implements OnInit{

  resenacafe : ResenaCafe = new ResenaCafe();
  id:string;
  tipo:string;
  usuarioid:string;
  cafeteria:Cafeteria =new Cafeteria();
  usuario:Usuario = new Usuario();
  calificacionCafeteria:Number;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private resenaservice: ResenaProductoService,
    private productoserviceid: AgregarProductoIdService,
    private usuarioservice:UsuarioService,
    private cafeteriaservice:CafeteriaService,
    private resenacafeservice:ResenaCafeService
    
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipo = this.route.snapshot.params['tipo'];
    this.usuarioid = this.route.snapshot.params['usuarioid'];

 //   this.cafeteriaservice.obtenerCafeteriaById(this.id).subscribe((data) => {
  //    this.cafeteria = data;
  //  });
    this.usuarioservice.obtenerUsuarioById(this.id).subscribe((data) => {
      this.usuario =data;
      console.log(data);
    });

    this.cafteriaYresena();

    //console.log(this.resenacafe);
  }

  enviarResena(){
   this.resenacafe.cafeteria  =this.cafeteria;
   this.resenacafe.usuario =this.usuario;
   
   this.resenacafeservice.registrarResenaCafeteria(this.resenacafe).subscribe((res)=>{
   
    if(res)
  {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Rseña Cafeteria Agregada",
      showConfirmButton: false,
      timer: 700
    });
    console.log("hola");
    this.router.navigate(['cafeterias', this.tipo,this.id]);
  }
   });
  }


obtenerCafeteria=async ()=>{
  return new Promise((res) => {
    this.cafeteriaservice.obtenerCafeteriaById(this.id).subscribe((data) => {
      this.cafeteria = data;
      res("ok");
    });

  });
}

  cafteriaYresena= async ()=>{
    await this.obtenerCafeteria();  
    this.resenacafeservice.obtenerCalificacionUsuariosByCafeteria(this.cafeteria.id).subscribe((dato) => {
      this.calificacionCafeteria =dato;
      console.log(dato);
     });
     
   }
   

}
