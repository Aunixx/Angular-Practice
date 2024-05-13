import { Component, Input, WritableSignal, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss',
})
export class FirstComponentComponent {
  constructor(private router: Router) {}
  @Input() first = 'first';
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
  goToHomePage() {
    this.router.navigate(['/']);
  }
  count: WritableSignal<number> = signal(0);
  incrementCount() {
    this.count.update((value) => value + 1);
  }
  decrementCount() {
    if (this.count() > 0) {
      this.count.update((value) => value - 1);
    }
  }
}
