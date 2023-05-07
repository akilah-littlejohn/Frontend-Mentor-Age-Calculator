import { Component, OnInit, inject } from '@angular/core';
import { FormService } from '../form.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
})
export class FormComponent implements OnInit {

  formService = inject(FormService);
  calcForm: FormBuilder;

  ngOnInit() {
   this.formService.ageValidation(this.calcForm);
   this.formService.dateValidator(this.calcForm.control);
   this.formService.futureYearValidator(this.calcForm.control)
  }

}
