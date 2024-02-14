import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Cafeteria } from '../cafeteria';
import { AgregarCafeteriaIdService } from '../agregar-cafeteria-id.service';
import { ResenaCafeService } from '../resena-cafe.service';
import { ResenaCafe } from '../resena-cafe';


import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-lista-cafeteria-id',
  templateUrl: './lista-cafeteria-id.component.html',
  styleUrl: './lista-cafeteria-id.component.css',
})
export class ListaCafeteriaIdComponent {
  id: string;
  cafeteria: Cafeteria;
  tipo: string;
  calificacionCafeteria:Number;
  resenaCafeteria:ResenaCafe[];
  comentarios:string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cafeteriaidservicio: AgregarCafeteriaIdService,
    private resenacafeteriaservice:ResenaCafeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipo = this.route.snapshot.params['tipo'];

    this.cafeteriaidservicio
      .obtenerListaProductos(this.id)
      .subscribe((dato) => {
        this.cafeteria = dato;
        this.resenacafeteriaservice.obtenerCalificacionUsuariosByCafeteria(this.cafeteria.id).subscribe(dato1 => {
          this.calificacionCafeteria =dato1;
          this.resenacafeteriaservice.obtenerListaResenaByCafeteriaId(this.id).subscribe(dato2 => {
            this.resenaCafeteria =dato2;
            this.obtenerComenarios();
            
          })
        })
      });
    //console.log(this.producto);
  }


  

  private obtenerComenarios() {
    const resenapro = this.resenaCafeteria.map((resena) => {
      return resena.comentario;
    });
    this.comentarios = resenapro.join('\n');
  }


  actualizarCafeteria() {
    this.cafeteriaidservicio
      .updateCafeteria(this.cafeteria.id.toString(), this.cafeteria)
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

  onSubmit(): void {
    this.actualizarCafeteria();
  }
}
