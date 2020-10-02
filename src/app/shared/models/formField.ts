import { FieldType } from './fieldType';
import { ItemType } from './ItemType';

export interface FormField {
    name: string,
    type: FieldType,
    label: string,
    disabled?: boolean,
    placeholder?: string,
    value?: string,
    options?: Array<ItemType> | Array<string>,
    selectMultiple?: boolean
}