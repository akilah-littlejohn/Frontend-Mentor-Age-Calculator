import { Component, OnInit, inject } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone:true
})
export class FormComponent implements OnInit {
  

  ngOnInit() {
    const formService = inject(FormService)
  }

}