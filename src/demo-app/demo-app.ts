import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'demo-app',
  templateUrl: 'demo-app/demo-app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['demo-app/demo-app.component.css']
})

export class AppComponent {
  menuItems: Array<any>;

  constructor(private _router: ActivatedRoute) {
    this.menuItems = [
      {caption: 'Typehead', link: ['Typehead']},
    ]
  }
  isActive(instruction: string[]) {
    // return this._router.isRouteActive(this._router.generate(instruction));
  }
}