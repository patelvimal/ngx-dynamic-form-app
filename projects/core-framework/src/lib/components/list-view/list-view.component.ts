import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseControlComponent } from '../base.component';

@Component({
	selector: 'list-view',
	templateUrl: './list-view.component.html',
	styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent extends BaseControlComponent {
	@ViewChild('listView', { static: true }) input: ElementRef;
	

	constructor(fb: FormBuilder) {
		super(fb);
	}

	ngOnInit(): void {
		this.options = this.options || [];
		this.selectMultiple = this.selectMultiple || false;
	}

}
