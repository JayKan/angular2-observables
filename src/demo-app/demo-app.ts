import { Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { TypeHeadComponent } from '../components/typehead/typehead';
import { TouristComponent } from '../components/tour/tour';
import { WeatherDemo } from '../components/weather/weather';

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
  { path: '/tourist',  name: 'Tourist',  component: TouristComponent                      },
  { path: '/weather',  name: 'Weather', component: WeatherDemo                            }
])

export class AppComponent {
  menuItems: Array<any>;
  
  constructor() {
    this.menuItems = [
      {caption: 'Typehead', link: ['Typehead']},
    ]
  }
}