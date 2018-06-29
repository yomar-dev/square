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

const appRoutes: Routes = [
  { path: '', component: CiudadesComponent },
  { path: 'ciudades', component: CiudadesComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    CiudadesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBblSu-nxTi5l5Ns9ND6Ynjz901CXDXS-g'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CiudadesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
