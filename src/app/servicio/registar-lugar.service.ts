import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistarLugarService {
  private lugaresURL = 'https://localhost:44352/api/lugares';

  constructor(private HttpClient: HttpClient) { }


  agregarLugar(lugar: any): Observable<any> {
    let json = JSON.stringify(lugar);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.HttpClient.post(this.lugaresURL, json, { headers: headers })
  };
  GetAll(){
    return this.HttpClient.get(this.lugaresURL);
  }

}
