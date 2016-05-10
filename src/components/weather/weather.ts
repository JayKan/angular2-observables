import { Component } from '@angular/core';
import { WeatherPanel } from './weather-panel.component';

@Component({
  selector: 'weather-demo',
  template: `
  <div id="weather-demo">
    <div class="container padding-0">    
      <h2>Weather Observable Demo</h2>
      <p>The purpose of this application is to show how Angular 2 development can be very declarative, among other things.</p>
      
      <div class="row">
        <div *ngFor="let c of cities" class="col-md-4">
          <weather-panel [city]="c"></weather-panel>
        </div>
      </div>    
    </div>
  </div>
  `,
  directives: [WeatherPanel]
})
export class WeatherDemo {
  cities: string[] = ['sanfrancisco', 'austin', 'boston'];
}