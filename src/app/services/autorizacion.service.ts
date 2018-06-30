import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()

export class AutorizacionService{
    constructor(private angularFireAuth: AngularFireAuth){
        this.isLogged();
    }

    public login = (email, password) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                alert("Login exitoso!!");
                console.log(response);
            })
            .catch((error) => {
                alert("Se ha presentado un error");
                console.log("Error: ", error);
            })
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

    public isLogged(){
        return this.angularFireAuth.authState;
    }
}