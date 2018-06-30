import { Injectable } from "@angular/core";

@Injectable()

export class AutorizacionService{
    public login = (email, password) => {
        console.log("Login");
    }

    public registro = (email, password) => {
        console.log("Registro");
    }
}