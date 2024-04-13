import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderPayment } from '../../interfaces/OrderPayment';
import { environment } from '../../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private URL = environment.apiUrl;

  constructor(
    private readonly http: HttpClient
  ) { }

  payment(body: OrderPayment): Observable<any> {
    return this.http.post<any>('http://203.161.60.64:8080/royalempire/payment', body)
  }
}
