# Updates to DSR
- [New] Form component
- [New] Form -> Fieldset 
  - I think this would be used to wrap the groups of input fields
- [New] HelperText variant: block 
  - `.a-label_helper__block`
- [Improvement] TextInput
  - Support `label` property so that Input and Label are automatically linked
  - Support `helperText` property so that it doesn't need to be created separately
  ```
  <TextInput id='input1' label='Input #1' helperText='A text input field' />
  ```