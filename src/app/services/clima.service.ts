import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(
    private http: HttpClient

  ) { }

  getClimaLondon(){
     return this.http.get('https://run.mocky.io/v3/48832317-8abb-48a6-96a4-a51a67d28e5c');
  }

  getClimaMexico(){
    return this.http.get('https://run.mocky.io/v3/6d0ce5ea-6c40-4e88-932d-b29d80feb7a9');
  }

}
