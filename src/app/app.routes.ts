import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: FirstComponentComponent },
  { path: 'second', component: SecondComponentComponent },
  { path: 'form', component: FormComponent },
];
