import React from 'react';
import {TextInput} from 'react-native-paper';

const CustomTextInput = props => {
  return <TextInput mode="outlined" activeOutlineColor="#196d87" {...props} />;
};

export default CustomTextInput;
