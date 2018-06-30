import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()

export class AutorizacionService{
    constructor(private angularFireAuth: AngularFireAuth){}

    public login = (email, password) => {
        console.log("Login");
    }

    public registro = (email, password) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                alert("Registro exitoso!!");
                console.log(response);
            })
            .catch((error) => {
                alert("Se ha presentado un error");
                console.log("Error: ", error);
            })
    }
}