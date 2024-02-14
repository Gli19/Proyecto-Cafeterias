import { Component } from '@angular/core';
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
  selector: 'app-resena-producto',
  templateUrl: './resena-producto.component.html',
  styleUrl: './resena-producto.component.css',
})
export class ResenaProductoComponent {
  resenaproducto: ResenaProducto = new ResenaProducto();
  id: string;
  producto: Producto = new Producto();
  usuarioid: string;
  usuario: Usuario = new Usuario();

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private resenaservice: ResenaProductoService,
    private productoserviceid: AgregarProductoIdService,
    private usuarioservice:UsuarioService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuarioid = this.route.snapshot.params['usuarioid'];

    this.productoserviceid.obtenerListaProductos(this.id).subscribe((data) => {
      this.producto = data;
    });

    this.usuarioservice.obtenerUsuarioById(this.usuarioid).subscribe((data) => {
      this.usuario =data;
    });

    
  }

  EnviarResenaProducto() {
    this.resenaproducto.producto=this.producto;
    this.resenaproducto.usuario =this.usuario;
    console.log(this.resenaproducto);

   this.resenaservice.registrarResena(this.resenaproducto).subscribe((res)=>{
      
    if(res)
    {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Reseña Agregada con exito",
        showConfirmButton: false,
        timer: 700
      });
      console.log("hola");
      this.router.navigate(['cafeterias',"2",this.id]);
    }
    });
  }
}
