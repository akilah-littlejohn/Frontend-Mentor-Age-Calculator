import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { AgeOutputComponent } from './age-output/age-output.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormComponent, AgeOutputComponent],
  template: `
  <h1 class="title">Age Calculator</h1>

  <section>
<app-form></app-form>
  <hr>
<app-age-output></app-age-output>
</section>
  `,
})
export class App {}

bootstrapApplication(App);
