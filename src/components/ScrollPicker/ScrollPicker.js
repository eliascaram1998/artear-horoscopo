import React from 'react';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

const ScrollPicker = ({ scrollType, onValueChange }) => {
  return (
    <Picker
      selectedValue={scrollType}
      testID="scroll-picker"
      onValueChange={onValueChange}
      style={styles.scrollPicker}
    >
      <Picker.Item label="Scroll Vertical" value="vertical" />
      <Picker.Item label="Scroll Horizontal" value="horizontal" />
    </Picker>
  );
};

export default ScrollPicker;