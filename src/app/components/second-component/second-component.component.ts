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
  inputValue: string = '';
  count: WritableSignal<number> = signal(0);
  incrementCount() {
    this.count.update((value) =>
      parseInt(this.inputValue) ? value + parseInt(this.inputValue) : value + 1
    );
  }
  decrementCount() {
    if (this.count() > 0) {
      this.count.update((value) =>
        parseInt(this.inputValue)
          ? value - parseInt(this.inputValue)
          : value - 1
      );
    }
  }
  resetCount() {
    this.count.update((value) => 0);
  }
  handleInputChange(e: EventTarget | null) {
    if (e instanceof HTMLInputElement) {
      this.inputValue = e.value;
      console.log(this.inputValue);
    }
  }
}
