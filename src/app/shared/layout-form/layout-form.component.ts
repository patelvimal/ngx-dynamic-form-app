import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormConfig } from '../models/formConfig';

@Component({
  selector: 'layout-form',
  templateUrl: './layout-form.component.html',
  styleUrls: ['./layout-form.component.scss']
})
export class LayoutFormComponent implements OnInit {
  @Input()
  config: FormConfig;
  form: FormGroup;

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();
    console.log(this.form);
  }


  private createFormGroup = () => {
    if (this.config && this.config.fields.length > 0) {
      const group = this.fb.group({});
      this.config.fields.forEach(control => {
        group.addControl(control.name, this.createControl());
      });
      return group;
    }
  }

  private createControl = () => {
    return new FormControl();
  }

  public onSave = ()=> {
    debugger;
    console.log(this.form);
  }

}
