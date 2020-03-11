import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ruta } from '../Modelos/ruta'

@Injectable({
  providedIn: 'root'
})
export class DescubreEspecificoService {
  private lugaresURL = 'https://localhost:44352/api/lugares';
  constructor(private HttpClient: HttpClient) { }

  GetAll(lugar){
    return this.HttpClient.get(this.lugaresURL+"/"+lugar);
  }

}
