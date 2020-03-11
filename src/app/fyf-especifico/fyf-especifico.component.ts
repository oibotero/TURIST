import { Component, OnInit } from '@angular/core';
import { FyfService } from '../servicio/fyf.service';
import { Router } from '@angular/router';
import { FyfespecificoService } from '../servicio/fyfespecifico.service';

@Component({
  selector: 'app-fyf-especifico',
  templateUrl: './fyf-especifico.component.html',
  styleUrls: ['./fyf-especifico.component.scss']
})
export class FyfEspecificoComponent implements OnInit {
  lugarEspecifico: any;
  lug: any = {
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
  constructor(public servicio:FyfespecificoService,public ruta:Router, public dondoIR:FyfService) { }

  ngOnInit() {
    this.lugar();
  }
  lugar(){
    this.servicio.GetAll(this.dondoIR.id).subscribe(
      res => {
        this.lug = res;      
      },
      error => {
        console.log(JSON.stringify(error))
      }
    )
  }
}
