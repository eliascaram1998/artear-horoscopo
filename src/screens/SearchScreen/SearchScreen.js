import React, { useEffect, useState } from 'react';
import { getHoroscopes, getHoroscopeByName  } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'; 
import SearchScreenView from '../../components/SearchScreenView/SearchScreenView';

const SearchScreen = () => {
  const [horoscopeData, setHoroscopeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [scrollType, setScrollType] = useState('vertical');
  const [selectedSign, setSelectedSign] = useState('');

  useEffect(() => {
    fetchHoroscopes();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadScrollType();
    }, [])
  );

  const fetchHoroscopes = async () => {
    try {
      const data = await getHoroscopes();
      setHoroscopeData(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching horoscopes:', error);
      setError('Error fetching horoscopes');
    }
  };

 
  const filterHoroscopes = async (selectedSign) => {
    console.log('filterHoroscopes called:',selectedSign);
    if (selectedSign) {
      try {
        const specificHoroscope = await getHoroscopeByName(selectedSign);
        if (specificHoroscope) {
          setFilteredData(specificHoroscope);
        } else {
          setFilteredData([]);
        }
      } catch (error) {
        console.error('Error filtering horoscopes:', error);
        setFilteredData([]);
      }
    } else {
      setFilteredData([]);
    }
  };

  const loadScrollType = async () => {
    try {
      const storedScrollType = await AsyncStorage.getItem('scrollType');
      if (storedScrollType) {
        setScrollType(storedScrollType);
      }
    } catch (error) {
      console.error('Error loading scrollType from AsyncStorage:', error);
    }
  };
  
    return (
      <SearchScreenView
        horoscopeData={horoscopeData}
        filteredData={filteredData}
        error={error}
        scrollType={scrollType}
        selectedSign={selectedSign}
        onSignSelect={(itemValue) => {
          setSelectedSign(itemValue);
          filterHoroscopes(itemValue);
        }}
      />
    );
};

export default SearchScreen;