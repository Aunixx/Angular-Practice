import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss',
})
export class FirstComponentComponent {
  hero = 'Windstorm';
  something = 'Something';
  onClick = () => {
    if (this.hero === 'Windstorm') {
      this.hero = 'Bombasto';
    } else {
      this.hero = 'Windstorm';
    }
    console.log(this.hero);
    console.log(this.something);
  };
}
