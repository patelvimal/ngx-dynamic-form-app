import { FormActions } from './formActions';
import { FormField } from './formField';

export interface FormConfig {
    formName: string,
    actions: Array<FormActions>,
    fields: Array<FormField>
}
