import React from 'react';
import { View } from 'react-native';

const mockVideoComponent = (props) => {
  return <View testID="mock-video" {...props} />;
};

export default mockVideoComponent;