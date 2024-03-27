import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosBolsaValores } from '../../interfaces/datos-valores';

@Injectable({
  providedIn: 'root'
})
export class WebTraderService {

  private URL: string = "https://financialmodelingprep.com/api/v3/historical-chart/1min/AAPL?apikey=oVaUoD2TWN5XjrroqwRrSQo9a9xT0gJy";

  constructor(
    private readonly http: HttpClient
  ) { }

  consultarDatos(): Observable<DatosBolsaValores[]> {
    return this.http.get<DatosBolsaValores[]>(this.URL);
  }
}
