import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IP } from '../model/ip';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  private url = 'http://localhost:8000/mogi/v1/ip';
  constructor(private readonly http: HttpClient) { }


  public getAll(): Observable<any> {
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

  public getIpLocal(): Observable<any> {
    return this.http.get<any>('https://json.geoiplookup.io/api');
  }

  public save(ip: IP): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<void>(this.url, ip, requestOptions);
  }
}
