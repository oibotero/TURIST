import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescubreService {
  private lugaresURL = 'https://localhost:44352/api/lugares';
  public id;
  constructor(private HttpClient: HttpClient) { }
    agregarLugarService(lugar: any): Observable<any> {
      let json = JSON.stringify(lugar);
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.HttpClient.post(this.lugaresURL, json, { headers: headers })
    };
    GetAll(){
      return this.HttpClient.get(this.lugaresURL);
    }
    getId(identificador){
      this.id=identificador;
        }

        
}


