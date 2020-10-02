import { ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControlComponent } from '../base.component';
import { InputEditorComponent } from '../input-editor/input-editor.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { ListViewComponent } from '../list-view/list-view.component';
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
        const componentFactory = this.resolver.resolveComponentFactory<BaseControlComponent>(this.getComponent(this.config.type));
        var component = this.container.createComponent(componentFactory);
        component.instance.label = this.config.label;
        component.instance.name = this.config.name;
        component.instance.type = this.config.type;
        component.instance.value = this.config.value;
        component.instance.group = this.formGroup;
        component.instance.options = this.config.options;
        component.instance.selectMultiple = this.config.selectMultiple;
        
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
            default:
                break;
        }
    }

}
