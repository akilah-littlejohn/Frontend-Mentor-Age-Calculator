import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn:'root'
})
export class FormService {
  #fb: FormBuilder;
  form: FormGroup;

  includeForm(form:FormGroup){
    this.form = form
  }
  ageValidation() {
    this.form = this.#fb.group({
      day: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      month: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      year: [
        '',
        [Validators.required, Validators.min(1900), this.futureYearValidator],
      ],
    });
  }

  futureYearValidator(control) {
    const year = Number(control.value);
    const currentYear = new Date().getFullYear();
    if (year > currentYear) {
      return { futureYear: true };
    }
    return null;
  }

  dateValidator(group) {
    const day = Number(group.get('day').value);
    const month = Number(group.get('month').value);
    const year = Number(group.get('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return null;
    }

    const date = new Date(year, month - 1, day);
    const isValid = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;

    return isValid ? null : { invalidDate: true };
  }
}