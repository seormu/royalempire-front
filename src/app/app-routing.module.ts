import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/user/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotfoundComponent } from './componentes/shared/notfound/notfound.component';
import { AuthGuard } from './guard/auth/auth.guard';
import { DepositoComponent } from './componentes/deposito/deposito.component';
import { WebTraderComponent } from './componentes/web-trader/web-trader.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'deposito', component: DepositoComponent},
  {path: 'web-trader', component: WebTraderComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
