import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FyfespecificoService {
  
  private contactanosURL = 'https://localhost:44352/api/registrar_feriasyfiestas';
  constructor(private HttpClient: HttpClient) { }

  GetAll(lugar){

    return this.HttpClient.get(this.contactanosURL+"/"+lugar);
  }

}
