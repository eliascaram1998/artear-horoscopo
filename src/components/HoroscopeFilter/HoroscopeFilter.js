import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

const HoroscopeFilter = ({ selectedSign, onSelectSign, data }) => {
  return (
    <View style={styles.filterContainer} testID="filter-container">
      <Picker
        style={styles.filterPicker}
        selectedValue={selectedSign}
        accessibilityLabel="horoscope-filter" 
        onValueChange={(itemValue) => onSelectSign(itemValue)}
      >
        <Picker.Item label="Todos los signos" value="" />
        {data.map(item => (
          <Picker.Item key={item.id} label={item.name} value={item.name} />
        ))}
      </Picker>
    </View>
  );
};

export default HoroscopeFilter;