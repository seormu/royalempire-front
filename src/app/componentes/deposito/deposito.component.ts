import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesServiceService } from '../../services/validaciones/validaciones-service.service';
import { VALIDACIONES_LOGIN } from '../../validaciones/validacionesUsuario';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment/payment.service';
import { OrderPayment } from '../../interfaces/OrderPayment';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrl: './deposito.component.css'
})
export class DepositoComponent {
  formulario: FormGroup;

  constructor(
    private readonly validacionesService: ValidacionesServiceService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly paymentService: PaymentService
  ){}

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(): void {
    this.formulario = this.formBuilder.group({
      titulo: ['', Validators.required],
      totalpagar: ['', Validators.required]
    });
  }

  pagar(): void{
    const data: OrderPayment = {
      title: this.formulario.get('titulo').value,
      quantity: this.formulario.get('totalpagar').value,
      unit_price: 1,
      description: 'Pago por mercado pago',
      category_id: 'games',
      currency_id: 'COP'
    }
    this.paymentService.payment(data).subscribe((response: any) => {
      window.location.href = response.initPoint;
    })
  }


  campoEsInvalido(nombreCampo: string): boolean {
    return this.validacionesService.campoEsInvalido(this.formulario, nombreCampo);
  }

  obtenerMensajeErrorCampo(nombreCampo: string): string {
    return this.validacionesService.obtenerMensajeErrorCampo(this.formulario, nombreCampo, null)
  }

}
