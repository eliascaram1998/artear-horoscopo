import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import { API_BASE_URL} from '../../services/apiConfig'; 
import HoroscopeFilter from '../../components/HoroscopeFilter/HoroscopeFilter';

const SearchScreenView = ({
  horoscopeData,
  filteredData,
  error,
  scrollType,
  selectedSign,
  onSignSelect,
}) => {
  const renderItem = ({ item, index }) => {
    const isHighlighted = index === 0 && selectedSign === '';
    const mediaComponent = isHighlighted ? (
      <Video
        source={{ uri: `${API_BASE_URL}/highlighted.mp4` }}
        style={styles.media}
        resizeMode="cover"
        repeat={true}
      />
    ) : (
      <Image source={{ uri: `${API_BASE_URL}/${item.image}` }} style={styles.circleImage} />
    );

    return (
      <View style={[
        scrollType === 'horizontal' ? styles.cardHorizontal : styles.cardVertical,
        isHighlighted && styles.highlightedBackground,
      ]}>
        {mediaComponent}
        <View style={styles.textContainer}>
          <Text style={styles.signName}>{item.name}</Text>
          <Text style={styles.descriptionText}>{item.prediction}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HoroscopeFilter
        selectedSign={selectedSign}
        data={horoscopeData}
        onSelectSign={onSignSelect}
      />
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={selectedSign ? filteredData : horoscopeData}
          renderItem={renderItem}
          horizontal={scrollType === 'horizontal'}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default SearchScreenView;