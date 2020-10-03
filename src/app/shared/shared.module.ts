import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { InputEditorComponent } from './input-editor/input-editor.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { LayoutFormComponent } from './layout-form/layout-form.component';
import { MaterialModule } from './material.module';
import { ListViewComponent } from './list-view/list-view.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
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
      ListViewComponent,
      FileUploadComponent,
  ],
  entryComponents : [
  ]
})
export class SharedModule { }
