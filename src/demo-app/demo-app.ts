import { Component, ViewEncapsulation} from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { TypeHeadComponent } from '../components/typehead/typehead';


@Component({
  selector: 'demo-app',
  templateUrl: 'demo-app/demo-app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['demo-app/demo-app.component.css']
})

@RouteConfig([
  { path: '/typehead', name: 'Typehead', component: TypeHeadComponent, useAsDefault: true },
])

export class AppComponent {
  menuItems: Array<any>;
  constructor() {
    this.menuItems = [
      { caption: 'Typehead', link: ['Typehead'] },
    ]
  }
}