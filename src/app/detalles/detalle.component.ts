import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})

export class DetalleComponent {
    id = null;
    ciudad: any = {};
    ciudades: any = [
        { 
            id: 1,
            nombre: "Barcelona",
            poblacion: 2500000,
            cercania: 1,
            distancia: 5,
            publicidad: true,
            descripcion: "Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral."
        },
        { 
            id: 2,
            nombre: "Berlin",
            poblacion: 3700000,
            cercania: 1,
            distancia: 8,
            publicidad: true,
            descripcion: "Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral."
        },
        { 
            id: 3,
            nombre: "Cartagena",
            poblacion: 1600000,
            cercania: 1,
            distancia: 3,
            publicidad: false,
            descripcion: "Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral."
        },
        { 
            id: 4,
            nombre: "Buenos Aires",
            poblacion: 2500000,
            cercania: 2,
            distancia: 14,
            publicidad: true,
            descripcion: "Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral."
        },
        { 
            id: 5,
            nombre: "Santiago de Chile",
            poblacion: 3700000,
            cercania: 2,
            distancia: 11,
            publicidad: false,
            descripcion: "Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral."
        },
        { 
            id: 6,
            nombre: "Ciudad de Mexico",
            poblacion: 11600000,
            cercania: 2,
            distancia: 19,
            publicidad: false,
            descripcion: "Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral."
        },
        { 
            id: 7,
            nombre: "Los Angeles",
            poblacion: 3400000,
            cercania: 3,
            distancia: 28,
            publicidad: true,
            descripcion: "Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral."
        },
        { 
            id: 8, 
            nombre: "Santorini",
            poblacion: 3700000,
            cercania: 3,
            distancia: 25,
            publicidad: true,
            descripcion: "Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral."
        },
        { 
            id: 9,
            nombre: "Rio de Janeiro",
            poblacion: 7800000,
            cercania: 3,
            distancia: 31,
            publicidad: false,
            descripcion: "Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral."
        }
    ];

    constructor(private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.snapshot.queryParams['action']);
        this.ciudad = this.buscarCiudad();
    }

    buscarCiudad() {
        return this.ciudades.filter((ciudad) => {
            return ciudad.id == this.id
        })[0] || null;
    }
}
