import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './form/model/form.model';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class TesteService {
  private url = 'http://localhost:8000/mogi/test/';
  constructor(private readonly http: HttpClient) { }

  public getTeste(): Observable<Usuario> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<Usuario>(this.url, requestOptions);
  }
  public save(usuario: Usuario): Observable<void> {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<void>(this.url, usuario, requestOptions);
  }
}
