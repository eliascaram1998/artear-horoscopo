import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { getHoroscopes, getHoroscopesAlphabetically } from '../../services/api';
import SortButtons from '../../components/SortButtons/SortButtons'; 
import styles from './styles';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'; 
import { API_BASE_URL} from '../../services/apiConfig'; 


const OrderScreen = () => {
  const [horoscopeData, setHoroscopeData] = useState([]);
  const [sortedBy, setSortedBy] = useState(null);
  const [error, setError] = useState(null);
  const [scrollType, setScrollType] = useState('vertical');
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    fetchHoroscopes();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadScrollType();
    }, [])
  );

  const fetchHoroscopes = async (sortedBy) => {
    try {
      let data = [];
      if (sortedBy === 'name') {
        data = await getHoroscopesAlphabetically();
        setShowVideo(false);
      } else if (sortedBy === 'date') { 
        setShowVideo(false);
        data = horoscopeData.slice();
        data.sort((a, b) => {
          const dateA = new Date(a.init_date.split('-').reverse().join('-'));
          const dateB = new Date(b.init_date.split('-').reverse().join('-'));
          return dateA - dateB;
        });
      } else {
        data = await getHoroscopes(sortedBy);
      }
      setHoroscopeData(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching horoscopes:', error);
      setError('Error fetching horoscopes');
    }
  };

  const handleSortBy = newSortBy => {
    setSortedBy(newSortBy);
    fetchHoroscopes(newSortBy);
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

  const renderItem = ({ item, index }) => (
    <View style={[
      scrollType === 'horizontal' ? styles.cardHorizontal : styles.cardVertical,
      index === 0 && styles.highlightedBackground,
    ]}>
      {index === 0 && showVideo ? (
        <>
          <Video
          source={{ uri: `${API_BASE_URL}/highlighted.mp4` }}
          style={styles.media}
          resizeMode="cover"
          repeat={true}
          />
          <View style={styles.textContainer}>
            <Text style={styles.signName}>{item.name}</Text>
            <Text style={styles.descriptionText}>{item.prediction}</Text>
          </View>
        </>
      ) : (
        <>
          <Image source={{ uri: `${API_BASE_URL}/${item.image}` }} style={styles.circleImage} />
          <View style={styles.textContainer}>
            <Text style={styles.signName}>{item.name}</Text>
            <Text style={styles.descriptionText}>{item.prediction}</Text>
          </View>
        </>
      )}
     </View>
  );

  return (
    <View style={styles.container}>
      <SortButtons sortedBy={sortedBy} handleSortBy={handleSortBy} />
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={horoscopeData}
          renderItem={renderItem}
          horizontal={scrollType === 'horizontal'}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default OrderScreen;