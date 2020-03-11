import { Component, OnInit } from '@angular/core';
import { RegistarLugarService } from '../servicio/registar-lugar.service'
import { Routes, RouterModule, Router } from '@angular/router'

@Component({
  selector: 'app-registrar-lugar',
  templateUrl: './registrar-lugar.component.html',
  styleUrls: ['./registrar-lugar.component.scss']
})
export class RegistrarLugarComponent implements OnInit {
  public numero:any;
  
  AgregarLugarRegistro: any = {
    nombreLugar: '',
    descripcionLugar: '',
    descripcionQueHacer: '',
    imagenes: '',
    id:''
  }
  
  dato = '';

  lugar: any;
  data: any;
  

  constructor(private RegistrarLugarService: RegistarLugarService, private Router: Router) { }

  ngOnInit() {
    this.Obtener();
    this.Obtenernum();

  }

  saveDato(d) {
    this.dato = d;
  }


  agregarLugar(identificador) {
    this.AgregarLugarRegistro.id=this.numero;
    this.RegistrarLugarService.agregarLugar(this.AgregarLugarRegistro).subscribe((res: any) => {
      alert("Lugar Registrado con Exito");
      alert(JSON.stringify(this.numero));
      this.Router.navigate(['/inicio']);
    },
      err => {
        console.log(JSON.stringify(err));
        alert("Lugar no Registrado ");
        console.log(this.AgregarLugarRegistro);
      });
  }
  Obtener() {
    this.RegistrarLugarService.GetAll().subscribe(
      res => {
        this.data = res
      },
      error => {
        console.log(JSON.stringify(error))
      }
    )
  }

  Obtenernum() {
    var cont=1;
    this.RegistrarLugarService.GetAll().subscribe(
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

