import { provideRouter, RouterConfig } from '@angular/router';
import { ComponentResolver, SystemJsComponentResolver } from '@angular/core';
import { RuntimeCompiler } from '@angular/compiler';
import { DemoAppRoutes } from './demo-app/demo-app.routes';

const routes: RouterConfig = [
  ...DemoAppRoutes  
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  {
    provide: ComponentResolver,
    useFactory: (compiler) => new SystemJsComponentResolver(compiler),
    deps: [RuntimeCompiler]
  }
];