import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseControlComponent } from '../base.component';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent extends BaseControlComponent  {

  constructor(fb: FormBuilder) { 
    super(fb);
  }

  onSave=()=> {
    debugger;

  }
  
}
