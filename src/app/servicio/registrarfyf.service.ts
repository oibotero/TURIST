import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarfyfService {
  private lugaresURL = 'https://localhost:44352/api/registrar_feriasyfiestas';

  constructor(private HttpClient: HttpClient) { }

  agregarLugarService(lugar: any): Observable<any> {
    let json = JSON.stringify(lugar);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.HttpClient.post(this.lugaresURL, json, { headers: headers })
  };
  GetAll(){

    return this.HttpClient.get(this.lugaresURL);
  }
}

