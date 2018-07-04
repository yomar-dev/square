import { Component } from '@angular/core';
import { CiudadesServices } from '../services/ciudades.service';
import { ActivatedRoute } from '@angular/router';
//import { Observable } from 'rxjs';
//import 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})

export class CrearComponent {
    ciudad: any = {};
    id: any = null;
    //results$: Observable<any>;
    //private searchField: FormControl;
    constructor(private ciudadesService: CiudadesServices, private route: ActivatedRoute, private http: Http) {
        this.id = this.route.snapshot.params['id'];
        if (this.id != 'new') {
            this.ciudadesService.getCiudad(this.id)
                .valueChanges()
                .subscribe((ciudad) => {
                    this.ciudad = ciudad;
                });
        }
        /*const URL = 'https://maps.google.com/maps/api/geocode/json';
        this.searchField = new FormControl();
        this.results$ = this.searchField.valueChanges
            //.switchMap(query => this.http.get(`${URL}?address=${query}`))
            .switchMap(query => this.http.get(`${URL}?address=${query}`))
            .map(response => response.json)
            .map(response => response.results);*/
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
