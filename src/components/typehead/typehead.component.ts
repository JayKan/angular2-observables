import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Control, FORM_DIRECTIVES } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { VIDEO_CARD_DIRECTIVES } from '../../core/card/card';
import 'rxjs/Rx';

const BASE_URL: string = 'https://www.googleapis.com/youtube/v3/search';
const TOKEN: string = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';
const makeURL = (query): string => `${BASE_URL}?q=${query}&part=snippet&key=${TOKEN}`;

@Component({
  selector: 'typehead-demo',
  styleUrls: ['components/typehead/typehead.component.css'],
  directives: [VIDEO_CARD_DIRECTIVES, FORM_DIRECTIVES],
  template: `
    <div class="typehead-demo">      
      <div class="container margin-top-30">
        <div class="row">
          <p>Public Youtube API Search:</p>        
          <input type="text" class="form-control" [ngFormControl]="youtubeSearch">        
        </div>
        <div class="row" *ngFor="let video of youtubeResults | async">
          <video-card>
            <video-card-title-group>
              <video-card-title>{{ video.title }}</video-card-title>            
              <video-card-description>
                <p>{{ video.description }}</p>
              </video-card-description>
              <img video-card-lg-image [src]="video.image">
            </video-card-title-group>
            
            <video-card-actions>
              <button class="btn btn-default">Like</button>
              <button class="btn btn-danger">Share</button>                              
            </video-card-actions>
          </video-card>
        </div>
      </div>       
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})

export class TypeHeadComponent implements OnInit {

  youtubeSearch: Control = new Control('');
  youtubeResults: Observable<any[]>;

  constructor(private _http: Http) {}
  
  ngOnInit(): void {
    this.youtubeResults = this.youtubeSearch.valueChanges
      .debounceTime(200) // optionally debounce
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
      created: new Date(video.snippet.publishedAt),
      description: video.snippet.description,
      channelTitle: video.snippet.channelTitle,
    }
  }
}