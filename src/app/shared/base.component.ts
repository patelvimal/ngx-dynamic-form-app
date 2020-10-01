import { Directive, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { FieldType } from './models/fieldType';

@Directive()
export class BaseControlComponent implements OnInit {
    @Input()
    name: string;
    @Input()
    type: FieldType;
    @Input()
    label?: string;
    @Input()
    value?: string;

    group: FormGroup;
    control: AbstractControl;


    constructor(private fb: FormBuilder) {
        
    }
    
    ngOnInit() {
        let control = {};
        control[this.name] = '';
        this.group = this.group || this.fb.group(control);
        this.value = this.value ||'';
        //this.group = this.group || this.fb.group({ [this.name]: '' });
    }

}