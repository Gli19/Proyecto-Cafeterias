import { Component } from '@angular/core';
import { Cafeteria } from '../cafeteria';
import { AgregarProductoService } from '../agregar-producto.service';
import { CafeteriaService } from '../cafeteria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';


import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrl: './agregar-productos.component.css'
})
export class AgregarProductosComponent {

  producto: Producto =new Producto();
  cafeterias:Cafeteria[];
  nombreCafeteria:string;
  id:string;
  tipo:string

  constructor( private route: ActivatedRoute,private agregarProducto:AgregarProductoService,private cafeteriaServicio:CafeteriaService,private router:Router){}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.tipo = this.route.snapshot.params['tipo'];
    
       this.obtenerCafeteria();
       console.log("hola");
       console.log(this.cafeterias);
    
  }




  guardarProducto(){
   this.agregarProducto.registrarProducto(this.producto).subscribe(dato =>{
    

    if(dato)
  {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto Creado Con exito",
      showConfirmButton: false,
      timer: 700
    });
    console.log("hola");
    this.router.navigate(['cafeterias', this.tipo,this.id]);
  }
  else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fallo al crear producto!",
  
    });
    
  }
    });
  }

  private obtenerCafeteria(){
    this.cafeteriaServicio.obtenerListaCafeterias().subscribe(dato => {
      this.cafeterias = dato;
    });
  }

  encontrarCafeteria(){
    const objetoEncontrado = this.cafeterias.find(objeto => objeto["nombre"] == this.nombreCafeteria);
   console.log(objetoEncontrado);
    if(objetoEncontrado)
    this.producto.cafeteria =objetoEncontrado
  
    
  }


  onSubmit(): void{
    // 
    //console.log(this.producto);
  this.encontrarCafeteria();
  this.guardarProducto();  
    
   

  }
  
}
