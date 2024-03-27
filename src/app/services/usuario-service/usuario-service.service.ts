import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../interfaces/loginData';
import { environment } from '../../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  URL_BASE = environment.apiUrl;
  usuario: LoginResponse;

  constructor(
    private readonly http: HttpClient
  ) { }

  login(body: LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.URL_BASE}/usuario/login`, body);
  }

  validarToken(): Observable<boolean> {
    return this.http.get(`${this.URL_BASE}/usuario/validar-token`)
    .pipe(
      map((response: LoginResponse) => {
        this.usuario = response;
        return true;
      }), catchError(error => of(false))
    );
  }
}
