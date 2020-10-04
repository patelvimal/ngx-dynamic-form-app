import { ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControlComponent } from '../../components/base.component';
import { FileUploadComponent } from '../../components/file-upload/file-upload.component';
import { InputEditorComponent } from '../../components/input-editor/input-editor.component';
import { InputFieldComponent } from '../../components/input-field/input-field.component';
import { ListViewComponent } from '../../components/list-view/list-view.component';
import { FieldType } from '../../models/fieldType';
import { FormField } from '../../models/formField';

@Directive({
    selector: '[dynamicField]'
})
export class DynamicFieldDirective {

    @Input()
    config: FormField;

    @Input()
    formGroup: FormGroup;
    constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

    ngOnInit(): void {
        this.createComponent();
    }

    private createComponent = () => {
        const componentFactory = this.resolver.resolveComponentFactory<BaseControlComponent>(this.getComponent(this.config.type));
        var component = this.container.createComponent(componentFactory);
        component.instance.label = this.config.label;
        component.instance.name = this.config.name;
        component.instance.type = this.config.type;
        component.instance.value = this.config.value;
        component.instance.group = this.formGroup;
        component.instance.options = this.config.options;
        component.instance.disabled = this.config.disabled;
        component.instance.selectMultiple = this.config.selectMultiple;
        component.instance.isRequired = this.config.isRequired;
    }

    private getComponent = (type: FieldType) => {
        switch (type) {
            case FieldType.TextBox:
                return InputFieldComponent;
                break;
            case FieldType.Editor:
                return InputEditorComponent;
                break;
            case FieldType.ListView:
                return ListViewComponent;
                break;
            case FieldType.FileUpload:
                return FileUploadComponent;
                break;
            default:
                break;
        }
    }

}
