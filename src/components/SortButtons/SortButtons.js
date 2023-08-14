import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const SortButtons = ({ sortedBy, handleSortBy }) => {
  return (
    <View style={styles.sortButtonsContainer}>
      <TouchableOpacity
        style={[styles.sortButton, sortedBy === 'name' && styles.activeSortButton]}
        onPress={() => handleSortBy('name')}
      >
        <Text style={[styles.sortButtonText, sortedBy === 'name' && styles.activeSortButtonText]}>Ordenar Alfabéticamente</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.sortButton, sortedBy === 'date' && styles.activeSortButton]}
        onPress={() => handleSortBy('date')}
      >
        <Text style={[styles.sortButtonText, sortedBy === 'date' && styles.activeSortButtonText]}>Ordenar por Fecha</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SortButtons;