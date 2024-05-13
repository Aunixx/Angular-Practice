import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

export const routes: Routes = [
  { path: 'first', component: FirstComponentComponent },
  { path: 'second', component: SecondComponentComponent },
];
