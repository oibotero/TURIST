import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuariosService {
  private usuariosURL = 'http://localhost:50929/api/usuarios';

  constructor(private HttpClient: HttpClient) { }
  
  agregarUsuario(usuario: any): Observable<any> {
    let json = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.HttpClient.post(this.usuariosURL, json, { headers: headers })
  };
  GetAll(){

    return this.HttpClient.get(this.usuariosURL);
  }
}