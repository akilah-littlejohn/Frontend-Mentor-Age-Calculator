import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Age Calculator</h1>

  <section>
  <form action="">
    <fieldset class="fieldset">
      <label for="">Day</label>
      <input type="number" name="" id="">
    </fieldset>

    <fieldset>
      <label for="">Month</label>
      <input type="number" name="" id="">
    </fieldset>

    <fieldset>
      <label for="">Years</label>
      <input type="number" name="" id="">
    </fieldset>

  </form>
  <hr>
  <h1 class="output"><span class="date">38</span>Years</h1>
  <h1 class="output"><span class="date">3</span> months</h1>
  <h1 class="output" > <span class="date">26</span> days</h1>
</section>
  `,
})
export class App {}

bootstrapApplication(App);
