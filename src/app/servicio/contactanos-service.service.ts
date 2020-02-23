import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactanosServiceService {
  private contactanosURL = 'https://localhost:44352/api/CONTACTANOS';

  constructor(private HttpClient: HttpClient) { }

  agregarContactoService(contacto: any): Observable<any> {
    let json = JSON.stringify(contacto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.HttpClient.post(this.contactanosURL, json, { headers: headers })
  };
  GetAll(){

    return this.HttpClient.get(this.contactanosURL);
  }

}
