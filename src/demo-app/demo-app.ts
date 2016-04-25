import { Component, ViewEncapsulation} from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { TypeHeadComponent } from '../components/typehead/typehead';
import { TouristComponent } from '../components/tour/tour';

@Component({
  selector: 'demo-app',
  templateUrl: 'demo-app/demo-app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['demo-app/demo-app.component.css']
})

@RouteConfig([
  { path: '/typehead', name: 'Typehead', component: TypeHeadComponent, useAsDefault: true },
  { path: '/tourist',  name: 'Tourist',  component: TouristComponent                      }
])

export class AppComponent {
  menuItems: Array<any>;
  
  constructor() {
    this.menuItems = [
      {caption: 'Typehead', link: ['Typehead']},
    ]
  }
}