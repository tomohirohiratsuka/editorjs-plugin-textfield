# TextField tool
Table Block for the [Editor.js](https://editorjs.io).

## Installation

### Install via NPM or Yarn

Get the package

```shell
npm i editorjs-plugin-textfield
```
Include module in your application

```typescript
import TextField from 'editorjs-plugin-textfield';
```

## Usage
Add a new Tool to the `tools` property of the Editor.js initial config.

```typescript
const editor = EditorJS({
  ...
  
  tools: {
    ...
    textField: {
      class: TextField,
    }
  }
  
  ...
});
```

Or init Table Tool with additional settings

```typescript
const editor = EditorJS({
  ...
  
  tools: {
    ...
    textField: {
      class: TextField,
      config: {
        placeholder: 'Enter something',
        type: 'text',
      },
    },
  },
  
  ...
});
```

## Config Params

| Field              | Type     | Description                              |
| ------------------ | -------- | ---------------------------------------- |
| placeholder               | `text` | Initial placeholder, default is `Enter your text here`   |
| type               | `TextFieldType` | Inital input field type, default is `text`.|

## Output data
This Tool returns `data` with following format

| Field     | Type         | Description                               |
| --------- | ------------ | ----------------------------------------- |
| value   | `string` | the input field value |
| placeholder   | `string` | the placeholder value when it's set |
| type   | `TextFieldType` | the input field type |
| width   | `TextFieldWidthSize` | the input field width |
| fontSize   | `TextFieldFontSize` | the input field font size |
| position   | `TextFieldPosition` | the input field position |


```json
{
    "type" : "textField",
    "data": {
        "value": "Hello World",
        "placeholder": "Enter text here",
        "type": "text",
        "width": "md",
        "fontSize": "md",
        "position": "right"
    }
}
```
## i18n
```typescript
const i18n = {
    messages: {
        tools: {
            textField: {
                'Style': 'Style',
                'Width': 'Width',
                'Full Width': 'Full Width',
                'Large': 'Large',
                'Medium': 'Medium',
                'Small': 'Small',
                'Font Size': 'Font Size',
                'X-Small': 'X-Small',
                'Small': 'Small',
                'Medium': 'Medium',
                'Large': 'Large',
                'X-Large': 'X-Large',
                'Position': 'Position',
                'Left': 'Left',
                'Center': 'Center',
                'Right': 'Right',
                'Type': 'Type',
                'Text': 'Text',
                'Password': 'Password',
                'Email': 'Email',
                'Number': 'Number',
                'Tel': 'Tel',
                'Url': 'Url',
                'Date': 'Date',
                'Time': 'Time',
                'Month': 'Month',
                'Week': 'Week',
                'Datetime-Local': 'Datetime-Local',
                'Placeholder': 'Placeholder',
            }
        }
    }
}
```

# Theme
Since this library bundle some css for both of light and dark.
If you want to apply dark theme, you can set `dark` class to the parent element of the editor.
```html
<div id="editorjs" class="dark"></div>
```

## License
This project is licensed under the MIT License 
