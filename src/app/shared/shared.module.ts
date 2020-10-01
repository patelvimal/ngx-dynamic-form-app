import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { QuillModule } from 'ngx-quill';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { InputEditorComponent } from './input-editor/input-editor.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { LayoutFormComponent } from './layout-form/layout-form.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    QuillModule.forRoot()  
  ],
  exports :[
      InputEditorComponent,
      LayoutFormComponent
  ],
  declarations: [
      InputEditorComponent,
      LayoutFormComponent,
      DynamicFieldDirective,
      InputFieldComponent,
  ],
  entryComponents : [
  ]
})
export class SharedModule { }
