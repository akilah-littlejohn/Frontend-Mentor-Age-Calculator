import { Component, OnInit, inject } from '@angular/core';
import { FormService } from '../form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
})
export class FormComponent implements OnInit {\
  
  formService = inject(FormService);
  calcForm: FormGroup;

  ngOnInit() {
    this.formService.includeForm(this.calcForm);
  }

}
