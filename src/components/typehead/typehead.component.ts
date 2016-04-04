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
    ul {
        list-style: none;
        padding: 0;
        margin-top: 20px;
    }
    li.video-row {          
      margin-bottom: 2rem;     
      border: 0;
      box-shadow: 1px 1px 6px 0 #C6C4C4;
      cursor: pointer;        
    }
  `],
  template: `
    <div class="typehead-demo">
      <p>Search youtube videos:</p>        
      <input type="text" class="form-control" [ngFormControl]="searchInput">
      <ul>
        <li *ngFor="#video of videos | async" class="video-row">{{ video | json }}</li>
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
        .filter(inputText => inputText.length > 2)
        .map(inputText => makeURL(inputText))
        .switchMap(url => {
          return this._http.get(url).map(res => {
            return res.json()
          })
        })
        .map(response => {
          return response.items.map(video => TypeHeadComponent.parseItemData(video))
        })
    ;
  }

  static parseItemData(video) {
    return {
      image: video.snippet.thumbnails.high.url,
      title: video.snippet.title,
      created: new Date(video.snippet.publishedAt)
    }
  }
}