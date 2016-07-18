import { Type } from '@angular/core';
import { TypeHeadComponent } from '../components/typehead/typehead';
import { TouristComponent } from '../components/tour/tour';
import { WeatherDemo } from '../components/weather/weather';

export const DemoAppRoutes = [
  { path: '', redirectTo: '/typehead', terminal: true     },
  { path: 'typehead', component: <Type>TypeHeadComponent  },
  { path: 'tourist',  component: <Type>TouristComponent   },
  { path: 'weather',  component: <Type>WeatherDemo        }
];

