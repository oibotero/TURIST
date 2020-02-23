import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }
  login(username:string, password:string) {
    return this.http.post('https://localhost:44352/api/usuarios', {
      nombreUsuario: username,
      contrasena: password,     
    });     
  }
  

}
