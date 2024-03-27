import { Component } from '@angular/core';
import { UsuarioServiceService } from '../../../services/usuario-service/usuario-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nombreUsuario: string = '';

  constructor(
    private readonly userService: UsuarioServiceService
  ){}

  ngOnInit(): void {
    this.nombreUsuario = this.userService.usuario.nombre
  }
}
