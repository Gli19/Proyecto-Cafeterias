import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { type } from 'os';
import { Router } from '@angular/router';
import { ResenaCafeService } from '../resena-cafe.service';
import { ResenaProductoService } from '../resena-producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css',
})
export class ListaProductosComponent implements OnInit {
  id: string;
  productos: Producto[];
  tipo: string;
  usuarioid: string;
  suma:Number[] =[];


  constructor(
    private route: ActivatedRoute,
    private productoservicio: ProductoService,
    private router: Router,
    private resenacafeteriaservice:ResenaCafeService,
    private resenaproducto:ResenaProductoService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipo = this.route.snapshot.params['tipo'];
    this.usuarioid = this.route.snapshot.params['usuarioid'];

    console.log("hola");

  //  this.obtenerCalificacion();
   //this.obtenerListaProductos2()

 //  this.obtenerProducts();
   
 this.obtenerListaProductos2();
   console.log("1");
   console.log("2");

   
 //   this.productoservicio.obtenerListaProductos(this.id).subscribe((dato) => {
 //     this.productos = dato;
  //  });
  }


  obtenerListaProductos2(){
    return new Promise((res) => {
    this.productoservicio.obtenerListaProductos(this.id).subscribe((dato) => {
      this.productos = dato;
      this.obtenerProducts();
      res("OK");
    });
  });
  }


  obtenerProducts= async()=>{
   // await this.obtenerListaProductos2();
    await this.obtenerCalificaciones();
   // console.log(this.suma);
    //console.log("fin bucle");

    //console.log(this.suma);
  }

  obtenerCalificaciones =async ()=>{
      for(let i=0; i<this.productos.length; i++){
         await this.obtenerPro(i, this.productos[i].id);
        }   
  }

  obtenerPro(index:number,idproducto:number){
    return new Promise((res)=>{
      this.resenaproducto.obtenerCalificacionUsuarios(idproducto).subscribe((dato)=>{
        this.suma.push(dato);
        });
        res("Ok");
    });
  }


  
  obtenerListaProductos() {
    return new Promise((res) => {
      this.productoservicio.obtenerListaProductos(this.id).subscribe((dato) => {
        this.productos = dato;
      });
    });
  }




  obtenerPromedio(id:number,i:number) {
    return new Promise((res) => {
      this.resenaproducto.obtenerCalificacionUsuarios(id).subscribe((dato)=>{
        console.log(dato);
        this.suma[i]= dato;   
        res("Ok");
        });
    });
  }

  obtenerCalificacion=async ()=>{
    await this.obtenerListaProductos();



    console.log("despues");
    for(let i=0;i<this.productos.length;i++){
      console.log(i);
    await this.obtenerPromedio(this.productos[i].id,i);
    }
    console.log("adios");

   // console.log(this.suma);
  }

  productoId(id: number) {
    this.router.navigate(['lista-productos-id', id, this.tipo, this.usuarioid]);
  }
}
