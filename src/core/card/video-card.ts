import { 
  Component, 
  ViewEncapsulation, 
  ChangeDetectionStrategy, 
  OnInit 
} from 'angular2/core';

/*
 -------------------
 <video-card> is a basic content container component that adds the styles of a material design card.
 While you can use this component alone, it also provides a number of preset styles for common card sections, including:
 - video-card-title
 - video-card-subtitle
 - video-card-content
 - video-card-actions
 - video-card-footer
 -------------------
 */
@Component({
  selector: 'video-card',
  template: `
  <div class="video-card">
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['core/card/video-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoCard implements OnInit {
  ngOnInit(): void {
    console.log('----------- Video Card init() -----------');
  }
}