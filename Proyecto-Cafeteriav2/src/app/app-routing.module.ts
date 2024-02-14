import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ListaCafeteriasComponent } from './lista-cafeterias/lista-cafeterias.component';
import { ResenaCafeteriaComponent } from './resena-cafeteria/resena-cafeteria.component';
import { ResenaProductoComponent } from './resena-producto/resena-producto.component';
import {ListaProductosComponent} from './lista-productos/lista-productos.component';
import { AgregarCafeteriaComponent } from './agregar-cafeteria/agregar-cafeteria.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ListaProductoIdComponent } from './lista-producto-id/lista-producto-id.component';
import { ListaCafeteriaIdComponent } from './lista-cafeteria-id/lista-cafeteria-id.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { LoginComponent } from './login/login.component';
import { VistaAgregarComponent } from './vista-agregar/vista-agregar.component';

const routes: Routes = [
  {path : 'cafeterias/:tipo/:usuarioid',component:ListaCafeteriasComponent},
  {path : '',redirectTo:'login',pathMatch:'full'},
  {path : 'resena-cafeteria/:id/:tipo/:usuarioid',component : ResenaCafeteriaComponent},
  {path : 'resena-producto/:id/:usuarioid',component : ResenaProductoComponent},
  {path : 'lista-productos/:id/:tipo/:usuarioid',component : ListaProductosComponent},
  {path: 'agregar-cafeteria/:id/:tipo',component:AgregarCafeteriaComponent},
  {path:'agregar-productos/:id/:tipo',component:AgregarProductosComponent},
  {path:'lista-productos-id/:id/:tipo/:usuarioid',component:ListaProductoIdComponent},
  {path:'lista-cafeteria-id/:id/:tipo',component:ListaCafeteriaIdComponent},
  {path: 'registro-usuario',component:RegistroUsuariosComponent},
  {path: 'login',component:LoginComponent},
  {path: 'vista-agregar/:id/:tipo',component:VistaAgregarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
