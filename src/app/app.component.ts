import { Component } from '@angular/core';
import { FieldType } from './shared/models/fieldType';
import { FormConfig } from './shared/models/formConfig';
import { FormField } from './shared/models/formField';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'my-editor-app';
    formConfiguration: FormConfig;
    
    constructor() {
        const myTextBox: FormField = {
            label: 'Name',
            name: 'name',
            value:'',
            type: FieldType.TextBox
        };
        const myEditor: FormField = {
            label: 'Description',
            name: 'desc',
            value:'',
            type: FieldType.Editor
        }
        this.formConfiguration = {
            formName: "Sample Form",
            fields: [myTextBox,myEditor],
            actions: []
        }
    }
}
