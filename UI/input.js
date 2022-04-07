import React from 'react';
import {TextInput} from 'react-native-paper';

const CustomTextInput = React.forwardRef((props, ref) => (
  <TextInput
    ref={ref}
    mode="outlined"
    activeOutlineColor="#196d87"
    {...props}
  />
));

export default CustomTextInput;
