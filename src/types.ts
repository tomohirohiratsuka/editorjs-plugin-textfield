interface TextFieldData {
    value: string;
    inputType: string;  // Add field for input type
    placeholder: string;
}

interface TextFieldConfig {
    inputType?: string;
    placeholder?: string;
}

interface TextFieldNodeMap {
    input: HTMLInputElement;
    container: HTMLDivElement;
    placeholderInput: HTMLDivElement;
}

type AvailableTextFieldTypes =
    'text'
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