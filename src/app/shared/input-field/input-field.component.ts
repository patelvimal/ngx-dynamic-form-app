import { Component, OnInit } from '@angular/core';
import { BaseControlComponent } from '../base.component';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent extends BaseControlComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
