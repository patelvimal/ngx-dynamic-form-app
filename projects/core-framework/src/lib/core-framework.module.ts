import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { InputEditorComponent } from './components/input-editor/input-editor.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { LayoutFormComponent } from './components/layout-form/layout-form.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { DynamicFieldDirective } from './directives/dynamic-field/dynamic-field.directive';
import { MaterialModule } from './material.module';


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
      LayoutFormComponent,
      DynamicFieldDirective,
      InputFieldComponent,
      ListViewComponent,
      FileUploadComponent,
  ],
  entryComponents : [
  ]
})
export class CoreFrameworkModule { }
