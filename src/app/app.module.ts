import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/user/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './componentes/shared/nav/nav.component';
import { HeaderComponent } from './componentes/shared/header/header.component';
import { NotfoundComponent } from './componentes/shared/notfound/notfound.component';
import { DepositoComponent } from './componentes/deposito/deposito.component';
import { WebTraderComponent } from './componentes/web-trader/web-trader.component';
import { MatCardModule } from '@angular/material/card';
import { DepositoPendienteComponent } from './componentes/user/deposito-pendiente/deposito-pendiente.component';
import { DepositoExitosoComponent } from './componentes/user/deposito-exitoso/deposito-exitoso.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    NavComponent,
    HeaderComponent,
    NotfoundComponent,
    DepositoComponent,
    WebTraderComponent,
    DepositoPendienteComponent,
    DepositoExitosoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
