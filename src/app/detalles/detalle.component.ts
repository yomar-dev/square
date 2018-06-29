import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CiudadesServices } from '../services/ciudades.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})

export class DetalleComponent {
    id = null;
    ciudad: any = {};

    constructor(private route: ActivatedRoute, private ciudadesService: CiudadesServices) {
        this.id = this.route.snapshot.params['id'];
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.snapshot.queryParams['action']);
        this.ciudad = this.ciudadesService.buscarCiudad(this.id);
    }
}
