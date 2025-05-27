import { Component, input, Input, computed } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  imports: [],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  htmlFor = input<string>();
  label = input.required<string>();
  control = input.required<FormControl>();

  getLabel = computed(() => {
    return this.label() ? this.label() + '*' : 'Label';
  })
}
