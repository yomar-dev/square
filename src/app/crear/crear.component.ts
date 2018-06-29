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
        this.ciudadesService.registrarCiudad(this.ciudad);
    }
}
