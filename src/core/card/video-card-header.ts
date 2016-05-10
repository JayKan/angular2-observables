import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'video-card-header',
  template: `
  <ng-content select="[video-card-avatar]"></ng-content>
  <div class="video-card-header-text">
    <ng-content select="video-card-title, video-card-subtitle"></ng-content>
  </div>
  <ng-content></ng-content>  
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VideoCardHeader {
  
}