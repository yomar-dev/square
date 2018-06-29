import { Component } from '@angular/core';
import { CiudadesServices } from '../services/ciudades.service';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})

export class CrearComponent {
    ciudad: any = {};

    constructor(private ciudadesService: CiudadesServices){

    }

    registrarCiudad(){
        this.ciudad.id = Date.now();
        this.ciudadesService.registrarCiudad(this.ciudad);
        alert('Ciudad registrada con éxito!!');
        this.ciudad = {};
    }
}
