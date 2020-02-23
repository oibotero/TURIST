import { Component, OnInit } from '@angular/core';
import { CuentanosExperienciaService } from '../servicio/cuentanos-experiencia.service';
import { Routes, RouterModule, Router, Route } from '@angular/router';

@Component({
  selector: 'app-cuentanos-experiencia',
  templateUrl: './cuentanos-experiencia.component.html',
  styleUrls: ['./cuentanos-experiencia.component.scss']
})
export class CuentanosExperienciaComponent implements OnInit {
  AgregarExperiencia: any = {
    nombreUsuario: '',
    lugarOrigen: '',
    lugarVisitado: '',
    correoElectronico: '',
    descripcionExperiencia: '',
    imagenes: '',
    fecha:''
  }
  lugar:any;
  constructor(private CuentanosExperienciaService: CuentanosExperienciaService, private Router:Router) { }

  ngOnInit() {
  }
  agregarExperiencia(identificador) {
    this.CuentanosExperienciaService.agregarLugarService(this.AgregarExperiencia).subscribe((res: any) => {

      alert("Lugar Registrado con Exito");
      this.Router.navigate(['/inicio']);
    },
      err => {
        alert("Solo puedes contarnos una experiencia diaria");
        alert("Lugar no Registrado ");
        console.log(JSON.stringify(err));
        console.log(this.AgregarExperiencia);
      });
  }
}

