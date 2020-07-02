import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  private url = 'http://localhost:8000/mogi/servidores';
  constructor(private readonly http: HttpClient,) { }

  getServidores(): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<any>(this.url, requestOptions);
  }
}
