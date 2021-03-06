import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalles/detalle.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CiudadesServices } from './services/ciudades.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AutorizacionService } from './services/autorizacion.service';
import { MyGuard } from './services/my-guard.service';

const appRoutes: Routes = [
  { path: '', component: CiudadesComponent },
  { path: 'ciudades', component: CiudadesComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear/:id', component: CrearComponent, canActivate: [MyGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }
]

export const firebaseConfig = {
  apiKey: "AIzaSyBai98uWr36EPWd4UGmA_N4gR6ERhaHLxw",
  authDomain: "square-1530167276218.firebaseapp.com",
  databaseURL: "https://square-1530167276218.firebaseio.com",
  storageBucket: "square-1530167276218.appspot.com",
  messagingSenderId: "478963666652"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    CiudadesComponent,
    ContactoComponent,
    CrearComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBblSu-nxTi5l5Ns9ND6Ynjz901CXDXS-g'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [CiudadesServices, AutorizacionService, MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
