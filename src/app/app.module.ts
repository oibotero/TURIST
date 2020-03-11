import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MejoresDestinosComponent } from './mejores-destinos/mejores-destinos.component'
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BannerComponent } from './banner/banner.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { UsuariosService } from './servicio/usuarios.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListarAdministradoresComponent } from './listar-administradores/listar-administradores.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginServiceService } from './servicio/login-service.service';
import { RegistrarFeriasFiestasComponent } from './registrar-ferias-fiestas/registrar-ferias-fiestas.component';
import { FormsModule } from '@angular/forms';
import { RegistrarLugarComponent } from './registrar-lugar/registrar-lugar.component';
import { CuentanosExperienciaComponent } from './cuentanos-experiencia/cuentanos-experiencia.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { User } from './user/user.model';

import { LoginComponent } from './login/login.component';
import { DescubreComponent } from './descubre/descubre.component';
import { DescubreEspecificoComponent } from './descubre-especifico/descubre-especifico.component';
import { FeriaFiestaEspecificaComponent } from './feria-fiesta-especifica/feria-fiesta-especifica.component';
import { FyfEspecificoComponent } from './fyf-especifico/fyf-especifico.component';

import { NevadosComponent } from './nevados/nevados.component';
import { TermalesComponent } from './termales/termales.component';
import { CascadasRioComponent } from './cascadas-rio/cascadas-rio.component';
import { ParaisoBambuComponent } from './paraiso-bambu/paraiso-bambu.component';
import { BalsajeSolComponent } from './balsaje-sol/balsaje-sol.component';
import { EcoparqueYarumosComponent } from './ecoparque-yarumos/ecoparque-yarumos.component';
import { ParqueCocoraComponent } from './parque-cocora/parque-cocora.component';
import { MiradorChipreComponent } from './mirador-chipre/mirador-chipre.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'listar-administradores', component: ListarAdministradoresComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'register-admin', component: RegisterAdminComponent },
  { path: 'registrar-lugar', component: RegistrarLugarComponent },
  { path: 'cuentanos-experiencia', component: CuentanosExperienciaComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mejores-destino', component: MejoresDestinosComponent },
  { path: 'registrar-ferias-fiestas', component: RegistrarFeriasFiestasComponent },
  { path: 'descubre', component: DescubreComponent },
  { path: 'descubre-especifico', component: DescubreEspecificoComponent },
  { path: 'feria-fiesta-especifica', component: FeriaFiestaEspecificaComponent },
  { path: 'fyf-especifico', component: FyfEspecificoComponent },
  { path: 'nevados', component: NevadosComponent},
  { path: 'termales', component: TermalesComponent },
  { path: 'cascadas-rio', component: CascadasRioComponent },
  { path: 'paraiso-bambu', component: ParaisoBambuComponent },
  { path: 'balsaje-sol', component: BalsajeSolComponent },
  { path: 'ecoparque-yarumos', component: EcoparqueYarumosComponent  },
  { path: 'parque-cocora', component: ParqueCocoraComponent},
  { path: 'mirador-chipre', component: MiradorChipreComponent }

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
    LoginComponent,
    MejoresDestinosComponent,
    RegistrarFeriasFiestasComponent,
    DescubreComponent,
    DescubreEspecificoComponent,
    FeriaFiestaEspecificaComponent,
    FyfEspecificoComponent,
    NevadosComponent,
    TermalesComponent,
    CascadasRioComponent,
    ParaisoBambuComponent,
    BalsajeSolComponent,
    EcoparqueYarumosComponent,
    ParqueCocoraComponent,
    MiradorChipreComponent
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
    ListarAdministradoresComponent, CuentanosExperienciaComponent,
    ContactanosComponent, PreguntasFrecuentesComponent, MejoresDestinosComponent,
    LoginComponent, RegistrarFeriasFiestasComponent, DescubreComponent,
    DescubreEspecificoComponent, FeriaFiestaEspecificaComponent, FyfEspecificoComponent,
    NevadosComponent,
    TermalesComponent,
    CascadasRioComponent,
    ParaisoBambuComponent,
    BalsajeSolComponent,
    EcoparqueYarumosComponent,
    ParqueCocoraComponent,
    MiradorChipreComponent

  ]
})
export class AppModule { }
