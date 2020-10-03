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
        this.value = this.value ||'';
        //this.group = this.group || this.fb.group({ [this.name]: '' });
    }

}