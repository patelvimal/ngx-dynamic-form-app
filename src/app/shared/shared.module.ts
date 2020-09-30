import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { InputEditorComponent } from './input-editor/input-editor.component';
import { LayoutFormComponent } from './layout-form/layout-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule.forRoot()  
  ],
  exports :[
      InputEditorComponent,
      LayoutFormComponent
  ],
  declarations: [
      InputEditorComponent,
      LayoutFormComponent
  ]
})
export class SharedModule { }
