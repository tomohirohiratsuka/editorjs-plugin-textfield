type TextFieldWidthSize = 'sm' | 'md' | 'lg' | 'full';
type TextFieldFontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type TextFieldType = 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'time'
    | 'date'
    | 'datetime-local'
    | 'week'
    | 'month'
interface TextFieldData {
    value: string;
    placeholder: string;
    type: TextFieldType;
    width: TextFieldWidthSize
    fontSize: TextFieldFontSize
}

interface TextFieldConfig {
    type?: TextFieldType;
    placeholder?: string;
}

interface TextFieldNodeMap {
    input: HTMLInputElement;
    container: HTMLDivElement;
    placeholderInput: HTMLDivElement;
}


