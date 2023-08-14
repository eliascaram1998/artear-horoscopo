import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ScrollPicker from '../src/components/ScrollPicker/ScrollPicker';

describe('ScrollPicker component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<ScrollPicker scrollType="vertical" onValueChange={() => {}} />);
    const picker = getByTestId('scroll-picker');
    expect(picker).toBeTruthy();
  });

  it('should call onValueChange when picker value changes', async () => {
    const mockOnValueChange = jest.fn();
    const { getByTestId } = render(<ScrollPicker scrollType="vertical" onValueChange={mockOnValueChange} />);
    const picker = getByTestId('scroll-picker');
  
    fireEvent(picker, 'valueChange', 'horizontal');
  
    await waitFor(() => {
      expect(mockOnValueChange).toHaveBeenCalledWith('horizontal');
    });
  });
});