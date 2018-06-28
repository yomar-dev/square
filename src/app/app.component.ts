import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Square';
  listo = false;
  cont = 0;

  constructor(){
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }

  myClick(){
    this.cont++;
    console.log(`Click número ${this.cont}`)
  }
}
