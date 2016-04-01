import { Component, OnInit } from 'angular2/core';
import { Control } from 'angular2/common';
import { Observable } from 'rxjs/Observable';
import { Http } from 'angular2/http';
import 'rxjs/Rx';

const BASE_URL: string = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN: string = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';
const makeURL = (query): string => `${BASE_URL}?q=${query}&part=snippet&key=${API_TOKEN}`;

@Component({
  selector: 'typehead-demo',
  styles: [`
    .typehead-demo p {
       margin-bottom: 5px;
    }
  `],
  template: `
    <div class="typehead-demo">
      <p>Search youtube videos:</p>        
      <input type="text" class="form-control" [ngFormControl]="searchInput">
      <ul>
        <li *ngFor="#video of videos | async">{{ video | json }}</li>
      </ul>
    </div>
  `
})

export class TypeHeadComponent implements OnInit {

  searchInput: Control = new Control('');
  videos: Observable<any>;

  constructor(private _http: Http) {}

  ngOnInit(): void {
    this.videos = this.searchInput.valueChanges
        .debounceTime(200) // optionally debounce
        .map(inputText => makeURL(inputText))
        //flatMap won't cancel in-flight requests, switchMap will...
        //.flatMap(url => http.get(url).map(res => res.json()))
        .switchMap(url => this._http.get(url).map(res => res.json()))
        .map(response => response.items);

    console.log('Videos: ', this.videos);

  }
}