import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-output',
  templateUrl: './age-output.component.html',
  styleUrls: ['./age-output.component.css'],
  standalone:true
})
export class AgeOutputComponent implements OnInit {
date:number|string = '--'
  constructor() { }

  ngOnInit() {
  }

}