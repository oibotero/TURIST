import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DescubreService } from '../servicio/descubre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descubre',
  templateUrl: './descubre.component.html',
  styleUrls: ['./descubre.component.scss']
})
export class DescubreComponent implements OnInit {
  DescubreLug: any;
  constructor(private descubrel:DescubreService,public ruta:Router) {
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
  lugarVisitar(lugar){
    this.descubrel.getId(lugar);
    this.ruta.navigate(['/descubre-especifico']);
  }

  
}

