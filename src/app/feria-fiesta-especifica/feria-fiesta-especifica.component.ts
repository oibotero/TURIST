import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FyfService } from '../servicio/fyf.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feria-fiesta-especifica',
  templateUrl: './feria-fiesta-especifica.component.html',
  styleUrls: ['./feria-fiesta-especifica.component.scss'],
})
export class FeriaFiestaEspecificaComponent implements OnInit {

  DescubreLug: any;
  constructor(private descubrel: FyfService, public ruta: Router) {
    this.ObtenerLugares();
  }

  ngOnInit() {
  }

  ObtenerLugares() {
    this.descubrel.GetAll().subscribe(
      res => {
        this.DescubreLug = res
      },
      error => {
        console.log(JSON.stringify(error))
      }
    )
  }
  fyf(lugar) {
    this.descubrel.getId(lugar);
    this.ruta.navigate(['/fyf-especifico']);
  }

}



