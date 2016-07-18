import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './demo-app/demo-app';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';

// Extend Observable throughout the app
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/observable/of';
import 'rxjs/observable/interval';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS
])
.then(success => { console.log('Bootstrap success') })
.catch(error => console.error(error));