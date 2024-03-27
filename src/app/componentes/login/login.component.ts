import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidacionesServiceService } from '../../services/validaciones/validaciones-service.service';
import { UsuarioServiceService } from '../../services/usuario-service/usuario-service.service';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { LoginRequest } from '../../interfaces/loginData';
import { VALIDACIONES_LOGIN } from '../../validaciones/validacionesUsuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formulario: FormGroup;
  errorLogin: string;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly validacionesService: ValidacionesServiceService,
    private readonly usuarioService: UsuarioServiceService,
    private readonly auth: AuthServiceService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(): void {
    this.formulario = this.formBuilder.group({
      correo: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  iniciarSesion(): void {
    this.errorLogin = '';
    if (this.formulario.valid) {
      const body: LoginRequest = {
        usuario: this.formulario.get("correo").value,
        contrasenia: this.formulario.get("contrasenia").value
      }
      this.usuarioService.login(body).subscribe(resultado => {
        this.auth.loginAuth(resultado.token);
        this.router.navigate(['index'])
      }, (error) => {
        this.errorLogin = error.error.mensaje;
      });
    }
  }

  campoEsInvalido(nombreCampo: string): boolean {
    return this.validacionesService.campoEsInvalido(this.formulario, nombreCampo);
  }

  obtenerMensajeErrorCampo(nombreCampo: string): string {
    this.errorLogin = ''
    return this.validacionesService.obtenerMensajeErrorCampo(this.formulario, nombreCampo, VALIDACIONES_LOGIN)
  }

}
