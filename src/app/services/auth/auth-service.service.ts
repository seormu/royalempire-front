import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private readonly cookieService: CookieService
  ) { }

  loginAuth(token: string){
    this.cookieService.set('token',token, {sameSite: 'Lax', secure: true});
  }

  logout(): void {
    this.cookieService.delete('token');
  }

  getToken(): string | null {
    return this.cookieService.get('token'); 
  }

  isLoggedIn(): boolean {
    return this.getToken() !== '';
  }
}
