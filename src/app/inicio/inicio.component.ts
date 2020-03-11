import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit() {
  }

  Nevado() {
    this.ruta.navigate(['nevados']);
  }

  Termal() {
    this.ruta.navigate(['termales']);
  }
  Rio() {
    this.ruta.navigate(['cascadas-rio']);
  }
  Paraiso() {
    this.ruta.navigate(['paraiso-bambu']);
  }
  Balsaje() {
    this.ruta.navigate(['balsaje-sol']);
  }
  Ecoparque() {
    this.ruta.navigate(['ecoparque-yarumos']);
  }
  Cocora() {
    this.ruta.navigate(['parque-cocora']);
  }
  Chipre() {
    this.ruta.navigate(['mirador-chipre']);
  }
}




