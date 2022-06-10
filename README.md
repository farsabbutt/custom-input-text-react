# :gift: Custom Input Text React [![npm version](https://img.shields.io/npm/v/custom-input-text-react)](https://www.npmjs.com/package/custom-input-text-react)

An Editable text input component for react.

## Installation
Using NPM:
> npm install custom-input-text-react

OR

Using Yarn:
> yarn add custom-input-text-react

## Usage
```tsx
import {CustomTextInput} from "custom-input-text-react";

<CustomTextInput
         value="Click me to edit!"
         name="cool" 
         label="I am the label"
         onBlur={onBlur}
     />
```

## Props
| Prop Name     | Type             | Default value | Description   |
| ------------- | -------------    | ------------- | ------------- |
| value         | string | ' '            | Value of the editable text  | 
| name  | string     | ''  | Name of the input element  |
| label  | string     | ''  | Label of the input element  |
| className  | string     | ''  | Custom class name that can be added to the component  |
| onBlur  | function     | () => void  | Callback function when input onblur event is triggered  |
| onChange  | function     | () => void  | Callback function when input onchange event is triggered  |

:construction: Work in progress
