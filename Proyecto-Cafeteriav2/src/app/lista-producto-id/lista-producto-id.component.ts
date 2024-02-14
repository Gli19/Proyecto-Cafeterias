import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../producto';
import { AgregarProductoIdService } from '../agregar-producto-id.service';
import { CafeteriaService } from '../cafeteria.service';
import { Cafeteria } from '../cafeteria';
import { ProductoService } from '../producto.service';

import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';
import { ResenaProductoService } from '../resena-producto.service';
import { ResenaProducto } from '../resena-producto';




@Component({
  selector: 'app-lista-producto-id',
  templateUrl: './lista-producto-id.component.html',
  styleUrl: './lista-producto-id.component.css',
})
export class ListaProductoIdComponent {
  id: string;
  producto: Producto;
  mostrar: boolean = true;
  cafeterias: Cafeteria[];
  nombreCafeteria: string;
  reseñaProducto: ResenaProducto[];
  comentarios: string;
  tipo:string
  usuarioid:string;
  calificacionProducto:Number;



  constructor(
    private route: ActivatedRoute,
    private productoidservicio: AgregarProductoIdService,
    private cafeteriaServicio: CafeteriaService,
    private productoservice: ProductoService,
    private resenaproductservice: ResenaProductoService,
    private router:Router,
    private resenaproductoservice: ResenaProductoService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipo = this.route.snapshot.params['tipo'];
    this.usuarioid = this.route.snapshot.params['usuarioid'];
    console.log(this.id);
    console.log(this.usuarioid);

    this.productoidservicio.obtenerListaProductos(this.id).subscribe((dato) => {
      this.producto = dato;
      this.ejecutarMetodos();
    });
    this.cafteriaYresena();
  }

  onSubmit(): void {
    this.actualizarProducto();
  }

  private obtenerCafeteria() {
    this.cafeteriaServicio.obtenerListaCafeterias().subscribe((dato) => {
      this.cafeterias = dato;
    });

    this.resenaproductoservice.obtenerCalificacionUsuarios(this.producto.id).subscribe((dato) => {
      this.calificacionProducto =dato;
    });
  }


agregarcomentario(id:number){
  this.router.navigate(['resena-producto',id,this.usuarioid]);
}


obtenerlistacafeterias =async ()=>{
  return new Promise((res) => {
    this.cafeteriaServicio.obtenerListaCafeterias().subscribe((dato) => {
      this.cafeterias = dato;
      res("Ok")
  });

  });
}


cafteriaYresena= async ()=>{
 await this.obtenerlistacafeterias();
 
  this.resenaproductoservice.obtenerCalificacionUsuarios(this.producto.id).subscribe((dato) => {
    this.calificacionProducto =dato;
  });
  
}


  obtenerResenasProducto = () => {
    return new Promise((res) => {
      this.resenaproductservice
        .obtenerListaResenaByProductoId(this.producto.id)
        .subscribe((dato) => {
          this.reseñaProducto = dato;
          res('resenas obtenias');
        });
    });
  };

  private actualizarProducto() {
    this.productoservice
      .updateProducto(this.producto.id, this.producto)
      .subscribe((dato) => {
        if(dato)
  {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto Actualizado",
      showConfirmButton: false,
      timer: 700
    });
    console.log("hola");
    this.router.navigate(['agregar-cafeteria', this.id,this.tipo]);
  }
      });
  }

  private obtenerComenarios() {
    const resenapro = this.reseñaProducto.map((resena) => {
      return resena.comentario;
    });
    this.comentarios = resenapro.join('\n');
    console.log(this.comentarios);
  }

  ejecutarMetodos = async () => {
    await this.obtenerResenasProducto();
    this.obtenerComenarios();
  };

  eliminarProducto(id: number) {
    console.log(id);
    Swal.fire({
      title: '¿Quieres eliminar esta producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminado!',
          icon: 'success',
        });
        const res = this.productoservice
          .deleteProducto(id)
          .subscribe((dato) => {
            this.router.navigate(['cafeterias', this.tipo,this.id]);
          });
      }
    });
  }
}
