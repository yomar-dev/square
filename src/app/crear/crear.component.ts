import { Component } from '@angular/core';
import { CiudadesServices } from '../services/ciudades.service';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})

export class CrearComponent {
    ciudad: any = {};

    constructor(private ciudadesService: CiudadesServices) {

    }

    registrarCiudad() {
        let direccion = this.ciudad.calle + ',' + this.ciudad.ciudad + ',' + this.ciudad.pais;
        this.ciudadesService.obtenerGeoData(direccion)
            .subscribe((result) => {
                this.ciudad.lat = result.json().results[0].geometry.location.lat;
                this.ciudad.lng = result.json().results[0].geometry.location.lng;
                this.ciudad.id = Date.now();
                this.ciudadesService.registrarCiudad(this.ciudad);
                alert('Ciudad registrada con éxito!!');
                this.ciudad = {};
            })
    }
}
