import { Component } from '@angular/core';
import { CiudadesServices } from '../services/ciudades.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html'
})

export class CiudadesComponent {
  title = 'Square';
  lat: number = 4.6293029;
  lng: number = -74.1747479;
  ciudades = null;

  constructor(private ciudadesService: CiudadesServices) {
    this.ciudades = ciudadesService.getCiudades();
  }
}
