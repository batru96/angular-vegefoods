import { JsonPipe } from '@angular/common';
import { Component, input, Input, computed } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  imports: [JsonPipe],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  label = input.required<string>();
  @Input() control!: FormControl;

  getLabel = computed(() => {
    return this.label() ? this.label() + '*' : 'Label';
  })
}
