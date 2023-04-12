import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone:true,
  imports:[IconComponent]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}