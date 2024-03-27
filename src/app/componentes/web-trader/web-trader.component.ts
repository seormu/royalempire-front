import { Component } from '@angular/core';
import { WebTraderService } from '../../services/webtrader/web-trader.service';
import { DatosBolsaValores } from '../../interfaces/datos-valores';

@Component({
  selector: 'app-web-trader',
  templateUrl: './web-trader.component.html',
  styleUrl: './web-trader.component.css'
})
export class WebTraderComponent {

  constructor(
    private readonly webTrader: WebTraderService,
  ) { }


  ngOnInit() {
    this.obtenerDatosBolsaValores();
  }

  obtenerDatosBolsaValores(): void {
    this.webTrader.consultarDatos().subscribe((datos: DatosBolsaValores[]) => {
      this.imprimirChart(datos);
    })
  }  

  imprimirChart(datos: DatosBolsaValores[]): void {
  }
}



