import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

type ValidatorId = 'required' | 'pattern';

interface FieldError {
  [key: string]: string;
}

interface CustomErrorEntry {
  id: ValidatorId;
  text: string;
}

@Component({
  selector: 'app-field-error-display',
  templateUrl: './field-error-display.component.html',
  styleUrls: ['./field-error-display.component.css']
})
export class FieldErrorDisplayComponent {
  @Input() fieldNgModel: AbstractControlDirective | AbstractControl | null ;
  @Input() customFieldErrors?: CustomErrorEntry[] | null = null;

  fieldErrorObject : FieldError;

  constructor() {
    this.fieldNgModel = null;
    this.fieldErrorObject = {
      required: 'El campo es obligatorio',
      pattern: 'El formato no es valido',
    };
  }

  ngOnInit(): void {
    if (this.customFieldErrors) {
      this.customFieldErrors.map(
        customError =>
          this.fieldErrorObject[customError.id] = customError.text
      );
    }
  }

  getErrorMessage = (errorId: string) => {
    return this.fieldErrorObject[errorId];
  };

}
