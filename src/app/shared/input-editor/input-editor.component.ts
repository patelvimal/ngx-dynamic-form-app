import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BaseControlComponent } from '../base.component';
import { quillConfiguration } from './input-editor.configuration';

@Component({
  selector: 'input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.scss']
})
export class InputEditorComponent extends BaseControlComponent  {
  descriptionControl: FormControl;
  editorOptions = quillConfiguration;
  
  constructor(fb:FormBuilder) { 
    super(fb);
  }

  // ngOnInit(): void {
  //   this.descriptionControl = new FormControl();
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   debugger;
  //   this.descriptionControl = new FormControl();
  // }

  // editorCreated(editor: any) {
  //   editor.focus && editor.focus();
  // }

  // saveField($event:any) {
  //   var description =  this.descriptionControl.value;
  //   console.log(description);
  // }
}
