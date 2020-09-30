import { FieldType } from './fieldType';

export interface FormField {
    name: string,
    type: FieldType,
    label: string,
    disabled?: boolean,
    placeholder?: string,
    value?: string,
}