import { Component, OnInit } from '@angular/core';
import { WebTraderService } from '../../services/webtrader/web-trader.service';
import { DatosBolsaValores } from '../../interfaces/datos-valores';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-zoom';
import Zoom from 'chartjs-plugin-zoom';

Chart.register(Zoom);


@Component({
  selector: 'app-web-trader',
  templateUrl: './web-trader.component.html',
  styleUrl: './web-trader.component.css'
})
export class WebTraderComponent implements OnInit {

  constructor(
    private readonly webTrader: WebTraderService,
  ) { }


  ngOnInit(): void {
    this.obtenerDatosBolsaValores();
  }

  obtenerDatosBolsaValores(): void {
    this.webTrader.consultarDatos().subscribe((datos: DatosBolsaValores[]) => {
      this.imprimirChart(datos.reverse());
    })
  }


  imprimirChart(datos: DatosBolsaValores[]) : void {
    const lineCanvas = document.getElementById('canva') as HTMLCanvasElement;
    const ctx = lineCanvas.getContext('2d');
    const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: datos.map(item => item.date),
        datasets: [
          {
            label: 'Open price',
            data: datos.map(item => item.open),
            borderColor: 'yellow',
            fill: true
          },
          /* {
             label: 'Close Price',
             data: datos.map(item => item.close),
             borderColor: 'green',
             //fill: false
           },
           {
             label: 'High',
             data: datos.map(item => item.high),
             borderColor: 'red',
             //fill: false
           },
           {
             label: 'Low',
             data: datos.map(item => item.low),
             borderColor: 'yellow',
             //fill: false
           },*/
        ]
      },
      options: {
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
            },
            pan: {
              enabled: true
            }
          }
        }
      }
    });
  }
}



