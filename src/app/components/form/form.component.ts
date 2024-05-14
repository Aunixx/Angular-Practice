import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../input/input.component';
interface Input {
  name: string;
  label: string;
  error: boolean;
  errorMessage: string;
  type: string;
}
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  contactForm: FormGroup = new FormGroup({});
  allInputs: Input[] = [
    {
      name: 'name',
      label: 'Name',
      error: false,
      errorMessage: 'Name is required.',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      error: false,
      errorMessage: 'Please enter a valid email address.',
      type: 'email',
    },
    {
      name: 'phone',
      label: 'phone',
      error: false,
      errorMessage: 'Please enter a valid phone number.',
      type: 'phone',
    },
    {
      name: 'message',
      label: 'Message',
      error: false,
      errorMessage: 'Message is required.',
      type: 'message',
    },
  ];
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      message: new FormControl('', Validators.required),
    });
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value, 'success');
      this.contactForm.reset();
    } else {
      const newInputs = [...this.allInputs];
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        if (control) {
          const input = newInputs.find((input) => input.name === key);
          if (input) {
            input.error = control.invalid;
          }
        }
      });
      this.allInputs = newInputs;
    }
  }

  handleInputChange(value: string, controlName: string) {
    this.contactForm.get(controlName)?.setValue(value);
    const item = this.allInputs.find(
      (input: Input) => input.name === controlName
    );
    if (this.contactForm.get(controlName)?.invalid) {
      if (item) item.error = true;
    } else {
      if (item) item.error = false;
    }
  }
}
