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
import { Routes, RouterModule} from '@angular/router'


const routes: Routes=[
  {path:'', component:InicioComponent},
  {path:'listar-administradores', component:ListarAdministradoresComponent},
  {path:'inicio',component:InicioComponent},
  {path:'register-admin',component:RegisterAdminComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BannerComponent,
    InicioComponent,
    RegisterAdminComponent,
    ListarAdministradoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent,EncabezadoComponent,BannerComponent,InicioComponent,RegisterAdminComponent,ListarAdministradoresComponent]
})
export class AppModule { }
