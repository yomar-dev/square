import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CiudadesServices {
    API_ENDPOINT = "https://square-1530167276218.firebaseio.com";
    ciudades: any = [
        { id: 1, nombre: "Barcelona", poblacion: 2500000, cercania: 1, distancia: 5, descripcion: "Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y alas Islas del Rosario, famosas por sus arrecifes de coral." },
        { id: 2, nombre: "Berlin", poblacion: 3700000, cercania: 1, distancia: 8, descripcion: "Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y alas Islas del Rosario, famosas por sus arrecifes de coral." },
        { id: 3, nombre: "Cartagena", poblacion: 1600000, cercania: 1, distancia: 3, descripcion: "Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y alas Islas del Rosario, famosas por sus arrecifes de coral." },
        { id: 4, nombre: "Buenos Aires", poblacion: 2500000, cercania: 2, distancia: 14, descripcion: "Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y alas Islas del Rosario, famosas por sus arrecifes de coral." },
        { id: 5, nombre: "Santiago de Chile", poblacion: 3700000, cercania: 2, distancia: 11, descripcion: "Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y alas Islas del Rosario, famosas por sus arrecifes de coral." },
        { id: 6, nombre: "Ciudad de Mexico", poblacion: 11600000, cercania: 2, distancia: 19, descripcion: "Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y alas Islas del Rosario, famosas por sus arrecifes de coral." },
        { id: 7, nombre: "Los Angeles", poblacion: 3400000, cercania: 3, distancia: 28, descripcion: "Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y alas Islas del Rosario, famosas por sus arrecifes de coral." },
        { id: 8, nombre: "Santorini", poblacion: 3700000, cercania: 3, distancia: 25, descripcion: "Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y alas Islas del Rosario, famosas por sus arrecifes de coral." },
        { id: 9, nombre: "Rio de Janeiro", poblacion: 7800000, cercania: 3, distancia: 31, descripcion: "Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y alas Islas del Rosario, famosas por sus arrecifes de coral." }
    ];

    constructor(private afDB:AngularFireDatabase, private http: Http){}

    public getCiudades(){
        return this.afDB.list('ciudades/');
        //return this.http.get(this.API_ENDPOINT+'/ciudades.json');
        /*return this.http.get(this.API_ENDPOINT+'/.json')
            .pipe(map((resultado) => {
                const data = resultado.json().ciudades;
                return data;
            }))*/
    }

    public buscarCiudad(id) {
        return this.ciudades.filter((ciudad) => {
            return ciudad.id == id
        })[0] || null;
    }

    public registrarCiudad(ciudad){
        //this.afDB.database.ref('ciudades/' + ciudad.id).set(ciudad);
        const headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(this.API_ENDPOINT+'/ciudades.json', ciudad, {headers:headers}).subscribe();
    }

    public editarCiudad(ciudad){
        this.afDB.database.ref('ciudades/' + ciudad.id).set(ciudad);
    }

    public obtenerGeoData(direccion){
        // http://maps.google.com/maps/api/geocode/json?address=
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
    }

    public getCiudad(id){
        return this.afDB.object('ciudades/' + id);
    }
}