import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarlistComponent } from "./componets/carlist/carlist.component";
import { CarComponent } from "./componets/car/car.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarlistComponent, CarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carsales-nosql';
}
