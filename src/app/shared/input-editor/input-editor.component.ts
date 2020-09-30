import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debug } from 'console';
import { quillConfiguration } from './input-editor.configuration';

@Component({
  selector: 'input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.scss']
})
export class InputEditorComponent implements OnInit {
  descriptionControl: FormControl;
  editorOptions = quillConfiguration;
  constructor() { }

  ngOnInit(): void {
    this.descriptionControl = new FormControl();
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    this.descriptionControl = new FormControl();
  }

  editorCreated(editor: any) {
    editor.focus && editor.focus();
  }

  saveField($event:any) {
    var description =  this.descriptionControl.value;
    console.log(description);
  }
}
