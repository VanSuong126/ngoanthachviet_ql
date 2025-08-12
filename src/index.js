import React, { useState } from 'react';
import { View } from 'react-native';
import Navigation from '~navigator';

const Index = () => {
  const [skipScreen, setSkipScreen] = useState('default');
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
       <Navigation skipScreen={skipScreen} />
    </View>
  );
};

export default Index;
