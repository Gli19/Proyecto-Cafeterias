import { Component, OnInit } from '@angular/core';
import { Cafeteria } from '../cafeteria';
import { AgregarCafeteriaService } from '../agregar-cafeteria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CafeteriaService } from '../cafeteria.service';
import { Location } from '@angular/common';

import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-cafeteria',
  templateUrl: './agregar-cafeteria.component.html',
  styleUrl: './agregar-cafeteria.component.css',
})
export class AgregarCafeteriaComponent implements OnInit {
  cafeteria: Cafeteria = new Cafeteria();
  cafeterias: Cafeteria[];

  idx: string;
  tipo: string;
  id: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private agregarCafeteriaServicio: AgregarCafeteriaService,
    private cafeteriaServicio: CafeteriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipo = this.route.snapshot.params['tipo'];
    this.obtenerCafeteria();
  }

  guardarCafeteria() {
    this.agregarCafeteriaServicio
      .registrarCafeteria(this.cafeteria)
      .subscribe((dato) => {
        console.log(dato);
        if (dato) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto Creado Con exito',
            showConfirmButton: false,
            timer: 700,
          });
          window.location.reload();
          //this.router.navigate(['agregar-cafeteria',this.id,this.tipo]);
        }
      });
  }

  private obtenerCafeteria() {
    this.cafeteriaServicio.obtenerListaCafeterias().subscribe((dato) => {
      this.cafeterias = dato;
    });
  }

  onSubmit(): void {
    this.guardarCafeteria();
  }

  cafeteriaId(id: number) {
    this.router.navigate(['lista-cafeteria-id', id, this.tipo]);
  }

  confirmacion(id: number) {
    Swal.fire({
      title: '¿Quieres eliminar esta cafeteria?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminado!',
          icon: 'success',
        });
        console.log('eliminar');
        const res = this.cafeteriaServicio
          .deleteCafeteria(id)
          .subscribe((dato) => {
            console.log(res);
          });
      }
      window.location.reload();
    });
  }

  productosCafeteria(id: number) {
    console.log(id);
    console.log(this.tipo);
    console.log(this.id);
    this.router.navigate(['lista-productos', id, this.tipo, this.id]);
  }
}
