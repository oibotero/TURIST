import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DescubreService } from '../servicio/descubre.service'
import { DescubreEspecificoService } from '../servicio/descubre-especifico.service'

@Component({
  selector: 'app-descubre-especifico',
  templateUrl: './descubre-especifico.component.html',
  styleUrls: ['./descubre-especifico.component.scss']
})
export class DescubreEspecificoComponent implements OnInit {

  constructor(public dondoIR: DescubreService, public ruta: Router, public servicio: DescubreEspecificoService) { }

  lug: any = {
    nombreLugar: '',
    descripcionLugar: '',
    descripcionQueHacer: '',
    imagenes: '',
    id:''
  }
  ngOnInit() {
    this.lugar();
  }


  lugar() {
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
