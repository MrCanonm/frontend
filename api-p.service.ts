import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPService {
  url = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  getData(name: string): Observable<any>{
    return this.http.get(this.url + name);
  }
}
