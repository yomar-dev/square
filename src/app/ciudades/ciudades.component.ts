import { Component } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html'
})

export class CiudadesComponent {
  title = 'Square';
  lat: number = 4.6293029;
  lng: number = -74.1747479;
  constructor() {

  }
}
