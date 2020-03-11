import { Component, OnInit } from '@angular/core';
import { CuentanosExperienciaService } from '../servicio/cuentanos-experiencia.service';
import { Routes, RouterModule, Router, Route } from '@angular/router';

@Component({
  selector: 'app-cuentanos-experiencia',
  templateUrl: './cuentanos-experiencia.component.html',
  styleUrls: ['./cuentanos-experiencia.component.scss']
})
export class CuentanosExperienciaComponent implements OnInit {
  public numero:any;
  data: any;
  AgregarExperiencia: any = {
    nombreUsuario: '',
    lugarOrigen: '',
    lugarVisitado: '',
    correoElectronico: '',
    descripcionExperiencia: '',
    imagenes: '',
    id:''
  }
  lugar: any;
  constructor(private CuentanosExperienciaService: CuentanosExperienciaService, private Router: Router) { }

  ngOnInit() {
    this.Obtenernum();
  }


  agregarExperiencia(identificador) {
    this.AgregarExperiencia.id=this.numero;
    this.CuentanosExperienciaService.agregarLugarService(this.AgregarExperiencia).subscribe((res: any) => {

      alert("Lugar Registrado con Exito");
      this.Router.navigate(['/inicio']);
    },
      err => {
        console.log(JSON.stringify(err));
        console.log(this.AgregarExperiencia);
      });
  }
  Obtenernum() {
    var cont=1;
    this.CuentanosExperienciaService.GetAll().subscribe(
      res => {
        this.data = res
        
        for (let i in this.data) {
          cont++;
          this.numero=cont
        }
        
      },
      error => {
        console.log(JSON.stringify(error))
      }
    )
  }
}

