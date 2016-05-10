import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './demo-app/demo-app';

bootstrap(AppComponent, [])
  .then(success => { console.log('Bootstrap success') })
  .catch(error => console.error(error))
;