import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Square';
  ciudades: any = [
    { nombre: "Barcelona", poblacion: 2500000 },
    { nombre: "Berlin", poblacion: 3700000 },
    { nombre: "Cartagena", poblacion: 1600000 },
    { nombre: "Buenos Aires", poblacion: 2500000 },
    { nombre: "Santiago de Chile", poblacion: 3700000 },
    { nombre: "Ciudad de Mexico", poblacion: 11600000 },
    { nombre: "Los Angeles", poblacion: 3400000 },
    { nombre: "Santorini", poblacion: 3700000 },
    { nombre: "Rio de Janeiro", poblacion: 7800000 }
  ];
  lat: number = 4.6293029;
  lng: number = -74.1747479;
  constructor(){
    
  }
}
