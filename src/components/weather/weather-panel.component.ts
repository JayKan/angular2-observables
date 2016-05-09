import { Component, Input, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { observableFirebaseObject, observableFirebaseArray } from './observableFirebase';
import { NgWhen } from './ngWhen';
import { SecondsToDatePipe } from './secondsToDatePipe';

declare var Firebase: any;

@Component({
  selector: 'weather-panel',
  template: `
  <h3>Weather for {{ city }}</h3>
  <div *ngIf="current">
    <p>Current temperature: {{ current.temperature }}</p>
    <p>Current windSpeed: {{ current.windSpeed }}</p>
  </div>
  
  <table class="table table-condensed">
    <tr>
      <th>Time</th>
      <th>Temp</th>
      <th>Precip</th>
    </tr>
    
    <tr *ngFor="#d of hourly | async">
      <td>{{ d.time | secondsToDate | date: 'H:m:s' }}</td>
      <td>{{ d.temperature }}</td>
      <td>{{ d.precipIntensity }}</td>
    </tr>
  </table>
  `,
  directives: [NgWhen],
  pipes: [SecondsToDatePipe],
  inputs: ['city']
})
export class WeatherPanel implements OnInit {
  city: string;

  currently: Observable<any>;
  hourly: Observable<any>;

  current: any;

  ngOnInit(): void {
    const weatherURL = "https://publicdata-weather.firebaseio.com/";
    let city = new Firebase(weatherURL).child(this.city);

    this.currently = observableFirebaseObject(city.child('currently'));

    this.currently.subscribe(res => {
      console.log('Got currenlty observable resposne: ', res);
      this.current = res;
    });

    this.hourly = observableFirebaseArray(city.child('hourly/data').limitToLast(10));
  }

}
