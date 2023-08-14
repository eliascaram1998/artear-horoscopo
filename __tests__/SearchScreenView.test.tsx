import React from 'react';
import { render } from '@testing-library/react-native';
import SearchScreenView from '../src/components/SearchScreenView/SearchScreenView';

jest.mock('react-native-video'); 

describe('SearchScreenView component', () => {
  const mockHoroscopeData = [
    { id: 1, name: 'Aries', prediction: 'Today is a good day.' },
    { id: 2, name: 'Taurus', prediction: 'You will encounter new opportunities.' },
  ];

  const mockFilteredData = [
    { id: 3, name: 'Gemini', prediction: 'Stay focused on your goals.' },
  ];

  const mockOnSignSelect = jest.fn();

  it('should render correctly with horoscope data', () => {
    const { getByText } = render(
      <SearchScreenView
        horoscopeData={mockHoroscopeData}
        filteredData={[]}
        error={null}
        scrollType="vertical"
        selectedSign=""
        onSignSelect={mockOnSignSelect}
      />
    );

    expect(getByText('Aries')).toBeTruthy();
    expect(getByText('Taurus')).toBeTruthy();
  });

  it('should render correctly with filtered data', () => {
    const { getByText } = render(
      <SearchScreenView
        horoscopeData={[]}
        filteredData={mockFilteredData}
        error={null}
        scrollType="vertical"
        selectedSign="Gemini"
        onSignSelect={mockOnSignSelect}
      />
    );

    expect(getByText('Gemini')).toBeTruthy();
  });

  it('should render error text when there is an error', () => {
    const { getByText } = render(
      <SearchScreenView
        horoscopeData={[]}
        filteredData={[]}
        error="Error fetching horoscopes"
        scrollType="vertical"
        selectedSign=""
        onSignSelect={mockOnSignSelect}
      />
    );

    expect(getByText('Error fetching horoscopes')).toBeTruthy();
  });

});