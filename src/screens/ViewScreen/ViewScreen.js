import React, { useEffect, useState } from 'react';
import { View  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScrollPicker  from '../../components/ScrollPicker/ScrollPicker';

const ViewScreen = () => {
  const [scrollType, setScrollType] = useState('vertical');

  const storeScrollType = async (value) => {
    try {
      await AsyncStorage.setItem('scrollType', value);
      setScrollType(value);
    } catch (error) {
      console.error('Error storing scroll type:', error);
    }
  };

  const loadStoredScrollType = async () => {
    try {
      const value = await AsyncStorage.getItem('scrollType');
      if (value !== null) {
        setScrollType(value);
      }
    } catch (error) {
      console.error('Error loading scroll type:', error);
    }
  };

  const handleValueChange = (itemValue) => {
    storeScrollType(itemValue);
  };

  useEffect(() => {
    loadStoredScrollType();
  }, []);

  return (
    <View>
      <ScrollPicker scrollType={scrollType} onValueChange={handleValueChange} />
    </View>
  );
};


export default ViewScreen;