import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCafeteriasComponent } from './lista-cafeterias/lista-cafeterias.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ResenaProductoComponent } from './resena-producto/resena-producto.component';
import { ResenaCafeteriaComponent } from './resena-cafeteria/resena-cafeteria.component';
import { FormsModule } from '@angular/forms';
import { AgregarCafeteriaComponent } from './agregar-cafeteria/agregar-cafeteria.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ListaProductoIdComponent } from './lista-producto-id/lista-producto-id.component';
import { ListaCafeteriaIdComponent } from './lista-cafeteria-id/lista-cafeteria-id.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { LoginComponent } from './login/login.component';
import { VistaAgregarComponent } from './vista-agregar/vista-agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCafeteriasComponent,
    NavComponent,
    ListaProductosComponent,
    ResenaCafeteriaComponent,
    ResenaProductoComponent,
    AgregarCafeteriaComponent,
    AgregarProductosComponent,
    ListaProductoIdComponent,
    ListaCafeteriaIdComponent,
    RegistroUsuariosComponent,
    LoginComponent,
    VistaAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
