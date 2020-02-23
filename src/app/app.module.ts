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
import { Routes, RouterModule } from '@angular/router';
import { LoginServiceService } from './servicio/login-service.service'

import { FormsModule } from '@angular/forms';
import { RegistrarLugarComponent } from './registrar-lugar/registrar-lugar.component';
import { CuentanosExperienciaComponent } from './cuentanos-experiencia/cuentanos-experiencia.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { User } from './user/user.model';

import {} from '@angular/animations/';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'listar-administradores', component: ListarAdministradoresComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'register-admin', component: RegisterAdminComponent },
  { path: 'registrar-lugar', component:RegistrarLugarComponent},
  { path: 'cuentanos-experiencia', component:CuentanosExperienciaComponent },
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
  { path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BannerComponent,
    InicioComponent,
    RegisterAdminComponent,
    ListarAdministradoresComponent,
    RegistrarLugarComponent,
    CuentanosExperienciaComponent,
    ContactanosComponent,
    PreguntasFrecuentesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent, EncabezadoComponent, 
    BannerComponent, InicioComponent, RegisterAdminComponent, 
    ListarAdministradoresComponent,CuentanosExperienciaComponent,
    ContactanosComponent,PreguntasFrecuentesComponent, 
    LoginComponent]
})
export class AppModule { }
