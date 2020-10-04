import { Directive, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { FieldType } from '../models/fieldType';
import { ItemType } from '../models/ItemType';

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
    @Input()
    options: Array<ItemType> | Array<string>;
    @Input()
    selectMultiple: boolean;
    @Input()
    disabled: boolean;

    @Output()
    selectedItems: Array<ItemType>;
    @Output()
    selectedItem: ItemType;

    group: FormGroup;
    control: AbstractControl;


    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {
        let control = {};
        control[this.name] = '';
        this.group = this.group || this.fb.group(control);
        this.value = this.value || '';
        this.disabled = this.disabled || false;
        this.control = this.group.get(this.name);
        //this.group = this.group || this.fb.group({ [this.name]: '' });
    }

    getErrorMessage() {
        return "";
        // if (this.name.hasError('required')) {
        //   return 'You must enter a value';
        // }

        // return this.name.hasError('email') ? 'Not a valid email' : '';
    }
}