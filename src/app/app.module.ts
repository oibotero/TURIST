import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BannerComponent } from './banner/banner.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { UsuariosService } from './servicio/usuarios.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListarAdministradoresComponent } from './listar-administradores/listar-administradores.component';
import { Routes, RouterModule } from '@angular/router'

import { FormsModule } from '@angular/forms';
import { RegistrarLugarComponent } from './registrar-lugar/registrar-lugar.component'

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'listar-administradores', component: ListarAdministradoresComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'register-admin', component: RegisterAdminComponent },
  { path: 'registrar-lugar', component:RegistrarLugarComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BannerComponent,
    InicioComponent,
    RegisterAdminComponent,
    ListarAdministradoresComponent,
    RegistrarLugarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent, EncabezadoComponent, BannerComponent, InicioComponent, RegisterAdminComponent, ListarAdministradoresComponent]
})
export class AppModule { }
