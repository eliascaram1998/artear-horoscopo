import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HoroscopeFilter from '../src/components/HoroscopeFilter/HoroscopeFilter';

describe('HoroscopeFilter component', () => {
  
    it('should render correctly', () => {
      const { getByTestId,queryAllByText } = render(
        <HoroscopeFilter selectedSign="" onSelectSign={() => {}} data={[]} />
      );
  
      const filterContainer = getByTestId('filter-container');
      const picker = queryAllByText('horoscope-filter');
  
      expect(filterContainer).toBeTruthy();
      expect(picker).toBeTruthy();
    });
  
  });