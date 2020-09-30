import { Directive, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FieldType } from './models/fieldType';

@Directive()
export abstract  class BaseControlComponent implements OnInit{
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
    ngOnInit() { 
        if(!this.value) {
            this.value = ''; 
        }
       
    }
    
}