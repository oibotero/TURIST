import { Component, OnInit } from '@angular/core';
import { ContactanosServiceService } from '../servicio/contactanos-service.service';
import { Routes, RouterModule, Router, Route } from '@angular/router';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {
AgregarContacto:any={
  nombreUsuario:'',
  correoElectronico:'',
  asunto:'',
  descripcionAsunto:'',
  fecha:''
}
contacto:any;

  constructor(private CONTACTANOSCOMPONENT: ContactanosServiceService, private ROUTER:Router) { }

  ngOnInit() {
  }
  agregarContactoComponent(identificador) {
    this.CONTACTANOSCOMPONENT.agregarContactoService(this.AgregarContacto).subscribe((res: any) => {

      alert("Lugar Registrado con Exito");
      this.ROUTER.navigate(['/inicio']);
    },
      err => {
        console.log(JSON.stringify(err));
        alert("Lugar no Registrado ");
        alert(this.AgregarContacto);
        console.log(this.AgregarContacto);
      });
  }
}
