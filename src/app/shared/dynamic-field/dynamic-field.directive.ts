import { ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputEditorComponent } from '../input-editor/input-editor.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { FieldType } from '../models/fieldType';
import { FormField } from '../models/formField';

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
        const componentFactory = this.resolver.resolveComponentFactory(this.getComponent(this.config.type));
        var component = this.container.createComponent(componentFactory);
        component.instance.label = this.config.label;
        component.instance.name = this.config.name;
        component.instance.type = this.config.type;
        component.instance.value = this.config.value;
        component.instance.group = this.formGroup;
    }

    private getComponent = (type: FieldType) => {
        switch (type) {
            case FieldType.TextBox:
                return InputFieldComponent;
                break;
            case FieldType.Editor:
                return InputEditorComponent;
                break;
            default:
                break;
        }
    }

}
