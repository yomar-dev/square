import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})

export class LugaresComponent {
  title = 'Square';
  ciudades: any = [
    { id: 1, nombre: "Barcelona", poblacion: 2500000, cercania: 1, distancia: 5, publicidad: true },
    { id: 2, nombre: "Berlin", poblacion: 3700000, cercania: 1, distancia: 8, publicidad: true },
    { id: 3, nombre: "Cartagena", poblacion: 1600000, cercania: 1, distancia: 3, publicidad: false },
    { id: 4, nombre: "Buenos Aires", poblacion: 2500000, cercania: 2, distancia: 14, publicidad: true },
    { id: 5, nombre: "Santiago de Chile", poblacion: 3700000, cercania: 2, distancia: 11, publicidad: false },
    { id: 6, nombre: "Ciudad de Mexico", poblacion: 11600000, cercania: 2, distancia: 19, publicidad: false },
    { id: 7, nombre: "Los Angeles", poblacion: 3400000, cercania: 3, distancia: 28, publicidad: true },
    { id: 8, nombre: "Santorini", poblacion: 3700000, cercania: 3, distancia: 25, publicidad: true },
    { id: 9, nombre: "Rio de Janeiro", poblacion: 7800000, cercania: 3, distancia: 31, publicidad: false }
  ];
  lat: number = 4.6293029;
  lng: number = -74.1747479;
  constructor() {

  }
}
