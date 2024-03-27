import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioServiceService } from '../../services/usuario-service/usuario-service.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly usuarioService: UsuarioServiceService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    return this.usuarioService.validarToken()
      .pipe(
        tap(esAutenticado => {
          if (!esAutenticado) {
            this.router.navigate(['/login']);
          }
        })
      )
  }
}
