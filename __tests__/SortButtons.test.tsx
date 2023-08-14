import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SortButtons from '../src/components/SortButtons/SortButtons'; 

test('renders SortButtons component', () => {
  const { getByText } = render(<SortButtons sortedBy="name" handleSortBy={jest.fn()} />);

  expect(getByText('Ordenar Alfabéticamente'))
  expect(getByText('Ordenar por Fecha'))
});

test('clicking on sort button calls handleSortBy', () => {
  const handleSortByMock = jest.fn();
  const { getByText } = render(<SortButtons sortedBy="name" handleSortBy={handleSortByMock} />);

  fireEvent.press(getByText('Ordenar por Fecha'));

  expect(handleSortByMock).toHaveBeenCalledWith('date');
});