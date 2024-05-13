import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() formInput: any = null;
  @Input() form: any = null;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
