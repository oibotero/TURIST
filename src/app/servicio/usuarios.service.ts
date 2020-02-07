import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable(
  //{
 // providedIn: 'root'
//})
)
export class UsuariosService {
  private usuariosURL = 'http://localhost:50929/api/usuarios';

  constructor(private HttpClient: HttpClient) { }

GetAll(){

  return this.HttpClient.get(this.usuariosURL);
}
  
  agregarUsuario(usuario: any) {
    let json = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.HttpClient.post("https://localhost:44347/api/USUARIOs", json, { headers: headers })
  }
  eliminarUsuario(identificador): Observable<any> {
    return this.HttpClient.delete(this.usuariosURL+"/" + identificador);

  }
}
