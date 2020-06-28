import { Injectable } from '@angular/core';
import { Empregado } from '../model/empregado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

  private readonly url = 'http://localhost:4200/mogi/v1/empregado';
  constructor(private readonly httpClient: HttpClient) { }

  public findOne(rgf: number): Observable<Empregado> {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.httpClient.get<Empregado>(`${this.url}/${rgf}`, requestOptions);
  }
}
