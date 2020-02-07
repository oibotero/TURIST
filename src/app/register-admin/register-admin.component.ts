import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicio/usuarios.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  agregarUsuarioRegistro : any ={Nombre:'',Apellido:'',Edad:''}
  Usuarios:any;

  constructor(private UsuarioService:UsuariosService) { }

  ngOnInit() {
  }
  registrarPersona(identificador){
    console.log('Evento Registrar')

  }

}
