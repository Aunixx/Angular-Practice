import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.scss',
})
export class SecondComponentComponent {
  second = 'Second Component';
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
