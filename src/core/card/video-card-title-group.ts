import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from 'angular2/core';

@Component({
  selector: 'video-card-title-group',
  template: `
  <div>
    <ng-content select="video-card-title, video-card-subtitle"></ng-content>
  </div>
  <ng-content select="img"></ng-content>
  <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VideoCardTitleGroup implements OnInit {
  
  ngOnInit(): void {
    
  }
  
}