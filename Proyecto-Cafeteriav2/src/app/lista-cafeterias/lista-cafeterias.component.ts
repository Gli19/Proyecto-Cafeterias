import { Component } from '@angular/core';
import { Cafeteria } from '../cafeteria';
import { CafeteriaService } from '../cafeteria.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ResenaCafe } from '../resena-cafe';
import { ResenaCafeService } from '../resena-cafe.service';

@Component({
  selector: 'app-lista-cafeterias',
  templateUrl: './lista-cafeterias.component.html',
  styleUrl: './lista-cafeterias.component.css',
})
export class ListaCafeteriasComponent {
  cafeterias: Cafeteria[];
  tipo: string;
  usuarioid: string;
  cafeteriaid: string;
  suma:Number[]=[];

  constructor(
    private route: ActivatedRoute,
    private cafeteriaServicio: CafeteriaService,
    private router: Router,
    private resenacafeteriaservice:ResenaCafeService
  ) {}

  ngOnInit(): void {
    this.tipo = this.route.snapshot.params['tipo'];
    this.usuarioid = this.route.snapshot.params['usuarioid'];
    console.log(this.tipo);
    //this.obtenerCafeteria();
    //this.obtenerCafe();
    this.obtenerListaCafeterias();
  }

  private obtenerCafeteria() {
    this.cafeteriaServicio.obtenerListaCafeterias().subscribe((dato) => {
      this.cafeterias = dato;
    });
  }

  resenacafeteria(id: number) {
    this.router.navigate(['resena-cafeteria', id, this.tipo, this.usuarioid]);
  }

  productosCafeteria(id: number) {
    this.router.navigate(['lista-productos', id, this.tipo, this.usuarioid]);
  }


  
  obtenerCafe = async () => {
    //await this.obtenerListaCafeterias();
    
   // console.log("1");
    await this.obtenerCalificaciones();
    console.log(this.suma);
   // console.log('fin bucle');

    //console.log(this.suma);
  };

  obtenerListaCafeterias() {
    return new Promise((res) => {
      this.cafeteriaServicio.obtenerListaCafeterias().subscribe((dato) => {
        this.cafeterias = dato;
        console.log(dato);
        this.obtenerCafe();
      });
      res('OK');
    });
  }


  obtenerCalificaciones = async () => {
    for (let i = 0; i < this.cafeterias.length; i++) {
      await this.obtenerPro(i, this.cafeterias[i].id);
    }
  };

  obtenerPro(index: number, idcafeteria: number) {
    return new Promise((res) => {
      this.resenacafeteriaservice.obtenerCalificacionUsuariosByCafeteria(idcafeteria)
      .subscribe((dato) => {
          this.suma.push(dato);
        });
      res('Ok');
    });
  }
}
