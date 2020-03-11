import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, Route } from '@angular/router';
import { RegistrarfyfService } from '../servicio/registrarfyf.service'


@Component({
  selector: 'app-registrar-ferias-fiestas',
  templateUrl: './registrar-ferias-fiestas.component.html',
  styleUrls: ['./registrar-ferias-fiestas.component.scss']
})
export class RegistrarFeriasFiestasComponent implements OnInit {
  registrar: any = {
    categoria: '',
    nombreEvento: '',
    lugar: '',
    descripcionFeriayFiesta: '',
    fechaInicio: '',
    fechaFin: '',
    imagenes: '',
    video: '',
    id: ''
  }
data:any;
public numero:any;
  lugar: any;

  constructor(private registrarfyf: RegistrarfyfService, private Router: Router) { }

  ngOnInit() {
    this.Obtenernum();
  }


  agregarFyF(identificador) {
    this.registrar.id = this.numero;
    this.registrarfyf.agregarLugarService(this.registrar).subscribe((res: any) => {

      alert("fYF Registrado con Exito");
      this.Router.navigate(['/inicio']);
    },
      err => {
        alert(this.registrar);
        console.log(JSON.stringify(err));
        console.log(this.registrar);
      });
  }
  Obtenernum() {
    var cont = 1;
    this.registrarfyf.GetAll().subscribe(
      res => {
        this.data = res

        for (let i in this.data) {
          cont++;
          
          this.numero = cont
        }

      },
      error => {
        console.log(JSON.stringify(error))
      }
    )
  }
}







