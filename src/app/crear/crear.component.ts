import { Component } from '@angular/core';
import { CiudadesServices } from '../services/ciudades.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})

export class CrearComponent {
    ciudad: any = {};
    id: any = null;

    constructor(private ciudadesService: CiudadesServices, private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
        if (this.id != 'new') {
            this.ciudadesService.getCiudad(this.id)
                .valueChanges()
                .subscribe((ciudad) => {
                    this.ciudad = ciudad;
                });
        }
    }

    registrarCiudad() {
        let direccion = this.ciudad.calle + ',' + this.ciudad.ciudad + ',' + this.ciudad.pais;
        this.ciudadesService.obtenerGeoData(direccion)
            .subscribe((result) => {
                this.ciudad.lat = result.json().results[0].geometry.location.lat;
                this.ciudad.lng = result.json().results[0].geometry.location.lng;
                if (this.id != 'new') {
                    this.ciudadesService.editarCiudad(this.ciudad);
                    alert('Ciudad editada con éxito!!');
                } else {
                    this.ciudad.id = Date.now();
                    this.ciudadesService.registrarCiudad(this.ciudad);
                    alert('Ciudad registrada con éxito!!');
                }
                this.ciudad = {};
            })
    }
}
