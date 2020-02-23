import { Component, OnInit } from '@angular/core';
import { RegistrarUsuariosService } from '../servicio/registrar-usuarios.service';
import { UsuariosService } from '../servicio/usuarios.service';
import { Routes, RouterModule, Router } from '@angular/router'


@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  agregarUsuarioRegistro: any = {
    nombreCompleto:'',
    nombreUsuario: '',
    tipoDocumento: '',
    numeroDocumento: '',
    correoElectronico: '',
    codigoAceptacion: '',
    contrasena: ''
  }
  Uservice; any;


  constructor(private RegistrarUsuarioService: RegistrarUsuariosService, private Router:Router) { }

  ngOnInit() {
  }

  ObtenerAdministradores() {
    this.RegistrarUsuarioService.GetAll().subscribe(
      res => {
        this.Uservice = res

      },
      error => {
        console.log(JSON.stringify(error))
      }
    )
  }
  agregarPersona(identificador) {
    this.RegistrarUsuarioService.agregarUsuario(this.agregarUsuarioRegistro).subscribe((res: any)=> {
      this.ObtenerAdministradores();
      alert("Usuario Registrado con Exito");
      this.Router.navigate(['/inicio']);
    },
      err => {
        console.log(JSON.stringify(err));
        console.log(this.agregarUsuarioRegistro);
        alert("Campos vacios");
      });
  }

  eliminarPersona() {
    console.log('Evento Eliminar')
    this.RegistrarUsuarioService.agregarUsuario(this.agregarUsuarioRegistro).subscribe(
      res => {
        //this.ob();
      },
      err => {
        console.log(JSON.stringify(err));
      });
  }

  




}
