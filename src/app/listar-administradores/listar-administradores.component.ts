import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicio/usuarios.service';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../Modelos/Usuarios';

@Component({
  selector: 'app-listar-administradores',
  templateUrl: './listar-administradores.component.html',
  styleUrls: ['./listar-administradores.component.scss']
})
export class ListarAdministradoresComponent implements OnInit {
  usuariosL: any;


  constructor(private UsuarioService: UsuariosService) {
    this.ObtenerAdministradores();
  }

  ngOnInit() {

  }

  ObtenerAdministradores() {
    this.UsuarioService.GetAll().subscribe(
      res => {
        this.usuariosL = res

      },
      error => {
        console.log(JSON.stringify(error))
      }
    )
  }

  eliminarPersona(identificador) {
    console.log('Evento Eliminar')
    this.UsuarioService.eliminarUsuario(identificador).subscribe(
      res =>{
        this.ObtenerAdministradores();
      },
      err=>{
        console.log(JSON.stringify(err));
      });
  }

}
