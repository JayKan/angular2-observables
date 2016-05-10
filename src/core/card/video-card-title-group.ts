import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'video-card-title-group',
  template: `
  <div>
    <ng-content select="video-card-title, video-card-subtitle, video-card-description"></ng-content>
  </div>
  <ng-content select="img"></ng-content>
  <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VideoCardTitleGroup {
  
}