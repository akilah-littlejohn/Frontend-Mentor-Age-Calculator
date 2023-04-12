import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { AgeOutputComponent } from './age-output/age-output.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormComponent, AgeOutputComponent, ButtonComponent,IconComponent],
  template: `
<h1 class="center-items title">Age Calculator</h1>
<section class="center-container">
  <app-form class="center-items"></app-form>
  <app-button></app-button>
  <app-age-output ></app-age-output>
</section>
  `,
})
export class App {}

bootstrapApplication(App);
