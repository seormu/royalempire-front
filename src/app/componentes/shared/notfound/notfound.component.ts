import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

  constructor(
    private readonly routes: Router
  ){}

  irAlInicio(){
    this.routes.navigate(['/index'])
  }

}
