import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Square';
  ciudades: any = [
    { nombre: "Barcelona", poblacion: 2500000, cercania: 1, distancia: 5 },
    { nombre: "Berlin", poblacion: 3700000, cercania: 1, distancia: 8 },
    { nombre: "Cartagena", poblacion: 1600000, cercania: 1, distancia: 3 },
    { nombre: "Buenos Aires", poblacion: 2500000, cercania: 2, distancia: 14 },
    { nombre: "Santiago de Chile", poblacion: 3700000, cercania: 2, distancia: 11 },
    { nombre: "Ciudad de Mexico", poblacion: 11600000, cercania: 2, distancia: 19 },
    { nombre: "Los Angeles", poblacion: 3400000, cercania: 3, distancia: 28 },
    { nombre: "Santorini", poblacion: 3700000, cercania: 3, distancia: 25 },
    { nombre: "Rio de Janeiro", poblacion: 7800000, cercania: 3, distancia: 31 }
  ];
  lat: number = 4.6293029;
  lng: number = -74.1747479;
  constructor(){
    
  }
}
